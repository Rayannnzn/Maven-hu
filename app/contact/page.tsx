import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import FaqSection from "@/components/sections/FaqSection";
import ScheduleForm from "@/components/shared/ScheduleForm";
import { faqs } from "@/lib/content";
import {
  address,
  addressLines,
  company,
  containerClass,
  hours,
  sectionClass,
  serviceArea,
  veteransDiscount,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Maven Home Services in Rockville, MD for HVAC, plumbing, and electrical service across Maryland and Northern Virginia. Schedule online or call our emergency line for urgent issues.",
};

const contactFaqs = faqs.slice(0, 3);

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Maven Home Services"
        description="Schedule a service appointment, request an estimate, or reach our emergency dispatch line for urgent issues. We will contact you promptly regarding your request."
        dark={false}
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={containerClass}>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-primary">
                Contact Information
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <span className="material-icons-round text-2xl text-maven-red">
                    location_on
                  </span>
                  <div>
                    <p className="font-semibold text-primary">Office Address</p>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-muted-foreground">
                      {addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-icons-round text-2xl text-maven-red">
                    phone
                  </span>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <a
                      href={company.phoneHref}
                      className="text-muted-foreground hover:text-maven-red hover:underline"
                    >
                      {company.phone}
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Emergency line available for urgent issues
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-icons-round text-2xl text-maven-red">
                    email
                  </span>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-muted-foreground hover:text-maven-red hover:underline"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-icons-round text-2xl text-maven-red">
                    schedule
                  </span>
                  <div>
                    <p className="font-semibold text-primary">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      {hours.weekday}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {hours.weekend}
                    </p>
                    <p className="mt-1 text-xs font-medium text-maven-red">
                      {hours.emergency}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-icons-round text-2xl text-maven-red">
                    map
                  </span>
                  <div>
                    <p className="font-semibold text-primary">Service Area</p>
                    <p className="text-sm text-muted-foreground">
                      {serviceArea.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border">
                <iframe
                  title="Maven Home Services office location"
                  src={address.mapsEmbedUrl}
                  className="h-48 w-full border-0 md:h-56"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-maven-gold/30 bg-maven-gold/10 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="material-icons-round text-2xl text-maven-gold">
                    military_tech
                  </span>
                  <h3 className="font-bold text-primary">
                    {veteransDiscount.title}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {veteransDiscount.audience}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {veteransDiscount.description}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Mention your eligibility when scheduling. Valid military or
                  first responder ID required at time of service.
                </p>
              </div>

              <ScheduleForm title="Schedule a Service" />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={contactFaqs}
        title="Common Questions"
        subtitle="Quick answers before you reach out."
      />
    </>
  );
}
