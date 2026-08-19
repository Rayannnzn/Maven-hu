/**
 * Lead-form submission endpoint — the site's only API route.
 *
 * Receives `LeadInput` JSON from `components/shared/ScheduleForm.tsx`, revalidates
 * it server-side, screens for bots, then sends two emails through Resend:
 * the internal notification and the customer auto-reply.
 *
 * Env vars (see `.env.example`):
 *   RESEND_API_KEY   required — from resend.com/api-keys
 *   LEAD_TO_EMAIL    required — inbox that receives leads
 *   LEAD_FROM_EMAIL  required — must be on a domain verified in Resend
 *   LEAD_BCC_EMAIL   optional — extra copy of the notification
 */
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { MIN_FILL_MS, validateLead, type LeadInput } from "@/lib/leads";
import { buildAutoReplyEmail, buildNotificationEmail } from "@/lib/email/leadEmails";
import { company } from "@/lib/site";

// Resend's SDK needs Node APIs, and a lead POST must never be cached or
// prerendered — without these the route would be collected as static at build.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Max characters accepted for any single field, before validation runs. */
const MAX_FIELD = 5000;

function str(value: unknown): string {
  return typeof value === "string" ? value.slice(0, MAX_FIELD).trim() : "";
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const lead: LeadInput = {
    firstName: str(raw.firstName),
    lastName: str(raw.lastName),
    email: str(raw.email),
    phone: str(raw.phone),
    service: str(raw.service),
    message: str(raw.message),
    sourcePage: str(raw.sourcePage),
    companyWebsite: str(raw.companyWebsite),
    startedAt: typeof raw.startedAt === "number" ? raw.startedAt : 0,
  };

  // --- Spam screening -------------------------------------------------------
  // Both checks report success to the caller. A bot that learns which of its
  // submissions were rejected can tune around the filter; one that thinks every
  // post worked has no signal to work with. Nothing is sent either way.
  const filledHoneypot = lead.companyWebsite.length > 0;
  const submittedTooFast =
    lead.startedAt > 0 && Date.now() - lead.startedAt < MIN_FILL_MS;

  if (filledHoneypot || submittedTooFast) {
    console.warn(
      `[leads] dropped submission (${filledHoneypot ? "honeypot" : "too fast"}) from ${lead.email || "unknown"}`,
    );
    return NextResponse.json({ ok: true });
  }

  // --- Validation -----------------------------------------------------------
  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  // --- Send -----------------------------------------------------------------
  let resend: Resend;
  let toEmail: string;
  let fromEmail: string;
  try {
    resend = new Resend(requireEnv("RESEND_API_KEY"));
    toEmail = requireEnv("LEAD_TO_EMAIL");
    fromEmail = requireEnv("LEAD_FROM_EMAIL");
  } catch (error) {
    // Misconfiguration, not user error — log loudly, stay vague to the visitor.
    console.error("[leads] configuration error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not submit your request. Please call us at ${company.phone}.`,
      },
      { status: 500 },
    );
  }

  const bcc = process.env.LEAD_BCC_EMAIL;
  const notification = buildNotificationEmail(lead, new Date());

  const { error: notificationError } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    ...(bcc ? { bcc } : {}),
    replyTo: lead.email,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
  });

  // The notification IS the lead — if it fails, the submission failed.
  if (notificationError) {
    console.error("[leads] notification send failed:", notificationError);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not submit your request. Please call us at ${company.phone}.`,
      },
      { status: 502 },
    );
  }

  // The auto-reply is a courtesy. The lead is already captured, so a failure
  // here is logged but never surfaced as a failed submission to the visitor.
  const autoReply = buildAutoReplyEmail(lead);
  const { error: autoReplyError } = await resend.emails.send({
    from: fromEmail,
    to: lead.email,
    replyTo: toEmail,
    subject: autoReply.subject,
    html: autoReply.html,
    text: autoReply.text,
  });

  if (autoReplyError) {
    console.error("[leads] auto-reply send failed:", autoReplyError);
  }

  return NextResponse.json({ ok: true });
}
