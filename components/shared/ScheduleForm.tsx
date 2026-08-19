"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/site";
import {
  emptyLead,
  serviceOptions,
  validateLead,
  type LeadErrors,
  type LeadField,
  type LeadInput,
} from "@/lib/leads";

type ScheduleFormProps = {
  compact?: boolean;
  title?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs font-medium text-maven-red">
      {message}
    </p>
  );
}

export default function ScheduleForm({
  compact = false,
  title = "Schedule a Service",
}: ScheduleFormProps) {
  // Several ScheduleForms can share a page (service pages render one in the
  // layout and one in the CTA), so every input id has to be instance-scoped or
  // the <Label htmlFor> bindings would all point at the first form.
  const uid = useId();
  const fid = (name: string) => `${name}-${uid}`;

  const pathname = usePathname();
  const [values, setValues] = useState<LeadInput>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const startedAt = useRef(0);

  // Stamped after mount, not during render — Date.now() in the render body
  // would differ between server and client HTML and trip hydration.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const setField = (field: LeadField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as the user edits it; re-validation happens
    // on submit, so nagging mid-typing would just be noise.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const invalid = (field: LeadField) => (errors[field] ? true : undefined);
  const describedBy = (field: LeadField) =>
    errors[field] ? fid(`${field}-error`) : undefined;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateLead(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFormError("");
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setFormError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage: pathname,
          startedAt: startedAt.current,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: LeadErrors;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setFormError(
          data.error ?? `Something went wrong. Please call us at ${company.phone}.`,
        );
        setStatus("error");
        return;
      }

      setValues(emptyLead);
      setStatus("success");
    } catch {
      setFormError(
        `We could not reach the server. Please check your connection or call us at ${company.phone}.`,
      );
      setStatus("error");
    }
  }

  const wrapperClass = compact ? "" : "rounded-2xl bg-card p-6 shadow-md md:p-10";

  if (status === "success") {
    return (
      <div className={wrapperClass}>
        <div
          role="status"
          className="flex flex-col items-center gap-3 rounded-xl border border-maven-gold/40 bg-maven-gold/10 px-6 py-10 text-center"
        >
          <span className="material-icons-round text-4xl text-maven-gold">
            check_circle
          </span>
          <h3 className="text-xl font-bold text-primary">Request received</h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thanks for reaching out. A confirmation is on its way to your inbox, and
            a member of our team will contact you promptly. For urgent issues,
            calling is the fastest way to reach a technician.
          </p>
          <a
            href={company.phoneHref}
            className="text-lg font-bold text-maven-red hover:underline"
          >
            {company.phone}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <div className={wrapperClass}>
      {!compact && (
        <h3 className="mb-6 text-xl font-bold text-primary md:text-2xl">
          {title}
        </h3>
      )}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={fid("firstName")}>First Name</Label>
            <Input
              id={fid("firstName")}
              name="firstName"
              placeholder="Enter your first name"
              autoComplete="given-name"
              value={values.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              aria-invalid={invalid("firstName")}
              aria-describedby={describedBy("firstName")}
              disabled={submitting}
            />
            <FieldError id={fid("firstName-error")} message={errors.firstName} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={fid("lastName")}>Last Name</Label>
            <Input
              id={fid("lastName")}
              name="lastName"
              placeholder="Enter your last name"
              autoComplete="family-name"
              value={values.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              aria-invalid={invalid("lastName")}
              aria-describedby={describedBy("lastName")}
              disabled={submitting}
            />
            <FieldError id={fid("lastName-error")} message={errors.lastName} />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={fid("email")}>Email Address</Label>
          <Input
            id={fid("email")}
            name="email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={invalid("email")}
            aria-describedby={describedBy("email")}
            disabled={submitting}
          />
          <FieldError id={fid("email-error")} message={errors.email} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={fid("phone")}>Phone Number</Label>
          <Input
            id={fid("phone")}
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={invalid("phone")}
            aria-describedby={describedBy("phone")}
            disabled={submitting}
          />
          <FieldError id={fid("phone-error")} message={errors.phone} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={fid("service")}>Service Needed</Label>
          <Select
            value={values.service || undefined}
            onValueChange={(value) => setField("service", value)}
            disabled={submitting}
          >
            <SelectTrigger
              id={fid("service")}
              className="w-full"
              aria-invalid={invalid("service")}
              aria-describedby={describedBy("service")}
            >
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError id={fid("service-error")} message={errors.service} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={fid("message")}>Message (Optional)</Label>
          <Textarea
            id={fid("message")}
            name="message"
            placeholder="Describe the issue or what you need..."
            rows={3}
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            aria-invalid={invalid("message")}
            aria-describedby={describedBy("message")}
            disabled={submitting}
          />
          <FieldError id={fid("message-error")} message={errors.message} />
        </div>

        {/*
          Honeypot. Kept in the DOM and off-screen rather than `display: none`,
          which some bots detect and skip. Hidden from assistive tech and from
          tab order, so no real visitor can reach it — anything that fills it in
          is automated, and the API silently drops the submission.
        */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={fid("companyWebsite")}>Company website</label>
          <input
            id={fid("companyWebsite")}
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.companyWebsite}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, companyWebsite: e.target.value }))
            }
          />
        </div>

        {formError && (
          <p
            role="alert"
            className="rounded-md border border-maven-red/30 bg-maven-red/5 px-3 py-2 text-sm font-medium text-maven-red"
          >
            {formError}
          </p>
        )}

        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-maven-red font-bold hover:bg-[#b81f1f]"
        >
          {submitting ? "Sending..." : "Request Service Appointment →"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We will contact you promptly regarding your request.
        </p>
      </form>
    </div>
  );
}
