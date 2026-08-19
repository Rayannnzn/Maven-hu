/**
 * Shared lead-form contract.
 *
 * Imported by BOTH the client form (`components/shared/ScheduleForm.tsx`) and
 * the server route (`app/api/leads/route.ts`), so it must stay free of secrets,
 * `process.env` reads, and any Node-only imports — everything here ships to the
 * browser bundle.
 */

export const serviceOptions = [
  "HVAC Repair / Maintenance",
  "Plumbing",
  "Electrical",
  "Air Conditioning",
  "Cooling Systems",
  "Preventive Maintenance Plans",
  "Emergency Service",
] as const;

export type LeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Page the form was submitted from, for routing/attribution. */
  sourcePage: string;
  /** Honeypot — must stay empty. Real users never see this field. */
  companyWebsite: string;
  /** Epoch ms the form was mounted; submissions faster than MIN_FILL_MS are bots. */
  startedAt: number;
};

/** Bots post instantly; humans need at least a few seconds to fill five fields. */
export const MIN_FILL_MS = 3000;

export const emptyLead: LeadInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  sourcePage: "",
  companyWebsite: "",
  startedAt: 0,
};

/** Field keys the user can actually see and correct. */
export type LeadField = "firstName" | "lastName" | "email" | "phone" | "service" | "message";

export type LeadErrors = Partial<Record<LeadField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/**
 * Validates the visible fields. Runs on the client for instant feedback and
 * again on the server, which never trusts the client result.
 */
export function validateLead(input: Partial<LeadInput>): LeadErrors {
  const errors: LeadErrors = {};
  const firstName = (input.firstName ?? "").trim();
  const lastName = (input.lastName ?? "").trim();
  const email = (input.email ?? "").trim();
  const phone = (input.phone ?? "").trim();
  const service = (input.service ?? "").trim();
  const message = (input.message ?? "").trim();

  if (!firstName) errors.firstName = "Please enter your first name.";
  else if (firstName.length > 80) errors.firstName = "First name is too long.";

  if (!lastName) errors.lastName = "Please enter your last name.";
  else if (lastName.length > 80) errors.lastName = "Last name is too long.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 160 || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";

  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";

  if (!service) errors.service = "Please select the service you need.";
  else if (!serviceOptions.includes(service as (typeof serviceOptions)[number]))
    errors.service = "Please select a service from the list.";

  if (message.length > 4000) errors.message = "Message is too long (4000 characters max).";

  return errors;
}
