/**
 * Email bodies for lead-form submissions.
 *
 * Server-only — imported by `app/api/leads/route.ts`. Two emails are built per
 * submission: the internal notification (goes to LEAD_TO_EMAIL) and the
 * customer auto-reply.
 *
 * Written as inline-styled tables on purpose: email clients strip <style>
 * blocks and have no flexbox/grid, so the site's Tailwind classes are useless
 * here. Brand hexes are duplicated from `app/globals.css` for the same reason.
 */
import { company, address, hours } from "@/lib/site";
import type { LeadInput } from "@/lib/leads";

const NAVY = "#0b2d5b";
const RED = "#d62828";
const GOLD = "#f4b400";
const LIGHT = "#f5f7fa";
const SLATE = "#6b7a90";

/** Escapes user-supplied text before it goes into an HTML email body. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Preserves the customer's line breaks inside an escaped HTML block. */
function escMultiline(value: string): string {
  return esc(value).replace(/\r?\n/g, "<br />");
}

function shell(inner: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px 12px;background:${LIGHT};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:${NAVY};">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
      ${inner}
    </table>
  </body>
</html>`;
}

function header(title: string, accent: string): string {
  return `<tr>
    <td style="background:${NAVY};padding:24px 28px;">
      <div style="color:${GOLD};font-size:12px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">${esc(company.name)}</div>
      <div style="color:#ffffff;font-size:22px;font-weight:bold;margin-top:6px;">${esc(title)}</div>
      <div style="height:3px;width:52px;background:${accent};margin-top:12px;"></div>
    </td>
  </tr>`;
}

function row(label: string, valueHtml: string): string {
  return `<tr>
    <td style="padding:12px 0;border-bottom:1px solid #e6eaf0;vertical-align:top;width:150px;font-size:12px;font-weight:bold;letter-spacing:0.6px;text-transform:uppercase;color:${SLATE};">${esc(label)}</td>
    <td style="padding:12px 0;border-bottom:1px solid #e6eaf0;vertical-align:top;font-size:15px;color:${NAVY};">${valueHtml}</td>
  </tr>`;
}

export type LeadEmail = { subject: string; html: string; text: string };

/** Internal notification — the actual lead. Reply-To is set to the customer. */
export function buildNotificationEmail(lead: LeadInput, submittedAt: Date): LeadEmail {
  const fullName = `${lead.firstName} ${lead.lastName}`.trim();
  const phoneDigits = lead.phone.replace(/\D/g, "");
  const stamp = submittedAt.toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `New ${lead.service} lead — ${fullName}`;

  const html = shell(
    header("New Service Request", RED) +
      `<tr>
        <td style="padding:24px 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            ${row("Name", esc(fullName))}
            ${row("Phone", `<a href="tel:${esc(phoneDigits)}" style="color:${RED};font-weight:bold;text-decoration:none;">${esc(lead.phone)}</a>`)}
            ${row("Email", `<a href="mailto:${esc(lead.email)}" style="color:${RED};text-decoration:none;">${esc(lead.email)}</a>`)}
            ${row("Service", esc(lead.service))}
            ${row("Message", lead.message ? escMultiline(lead.message) : `<span style="color:${SLATE};">— none —</span>`)}
            ${row("Submitted", `${esc(stamp)} ET`)}
            ${row("Page", esc(lead.sourcePage || "/"))}
          </table>
          <p style="margin:22px 0 0;font-size:13px;color:${SLATE};line-height:1.6;">
            Reply to this email to respond to ${esc(lead.firstName)} directly — the reply-to address is already set to their inbox.
          </p>
        </td>
      </tr>`,
  );

  const text = [
    "NEW SERVICE REQUEST",
    "",
    `Name:      ${fullName}`,
    `Phone:     ${lead.phone}`,
    `Email:     ${lead.email}`,
    `Service:   ${lead.service}`,
    `Message:   ${lead.message || "— none —"}`,
    `Submitted: ${stamp} ET`,
    `Page:      ${lead.sourcePage || "/"}`,
    "",
    `Reply to this email to reach ${lead.firstName} directly.`,
  ].join("\n");

  return { subject, html, text };
}

/** Customer-facing confirmation. Copy is hedged to match the site's voice. */
export function buildAutoReplyEmail(lead: LeadInput): LeadEmail {
  const subject = `We received your request — ${company.name}`;

  const html = shell(
    header("Thanks for reaching out", GOLD) +
      `<tr>
        <td style="padding:24px 28px;font-size:15px;line-height:1.7;color:${NAVY};">
          <p style="margin:0 0 16px;">Hi ${esc(lead.firstName)},</p>
          <p style="margin:0 0 16px;">
            Thanks for contacting ${esc(company.name)}. We have received your request for
            <strong>${esc(lead.service)}</strong> and a member of our team will contact you
            promptly to confirm the details and schedule a visit.
          </p>
          <p style="margin:0 0 20px;">
            If your issue is urgent, calling us is the fastest way to reach a technician.
          </p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="background:${RED};border-radius:8px;">
                <a href="${esc(company.phoneHref)}" style="display:inline-block;padding:13px 26px;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;">
                  Call ${esc(company.phone)}
                </a>
              </td>
            </tr>
          </table>
          <div style="margin-top:26px;padding:18px 20px;background:${LIGHT};border-radius:10px;">
            <div style="font-size:12px;font-weight:bold;letter-spacing:0.6px;text-transform:uppercase;color:${SLATE};">Your request</div>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:8px;">
              ${row("Service", esc(lead.service))}
              ${row("Phone", esc(lead.phone))}
              ${lead.message ? row("Message", escMultiline(lead.message)) : ""}
            </table>
          </div>
          <p style="margin:24px 0 0;font-size:13px;color:${SLATE};line-height:1.7;">
            ${esc(hours.weekday)}<br />
            ${esc(hours.weekend)}<br />
            ${esc(hours.emergency)}
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:${NAVY};padding:20px 28px;color:#ffffff;font-size:13px;line-height:1.7;">
          <strong>${esc(company.name)}</strong><br />
          <span style="color:rgba(255,255,255,0.7);">${esc(address.full)}</span><br />
          <a href="${esc(company.phoneHref)}" style="color:${GOLD};text-decoration:none;">${esc(company.phone)}</a>
        </td>
      </tr>`,
  );

  const text = [
    `Hi ${lead.firstName},`,
    "",
    `Thanks for contacting ${company.name}. We have received your request for ${lead.service} and a member of our team will contact you promptly to confirm the details and schedule a visit.`,
    "",
    `If your issue is urgent, calling us is the fastest way to reach a technician: ${company.phone}`,
    "",
    "YOUR REQUEST",
    `Service: ${lead.service}`,
    `Phone:   ${lead.phone}`,
    ...(lead.message ? [`Message: ${lead.message}`] : []),
    "",
    hours.weekday,
    hours.weekend,
    hours.emergency,
    "",
    company.name,
    address.full,
    company.phone,
  ].join("\n");

  return { subject, html, text };
}
