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
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Maven Home Services in Rockville, MD for HVAC, plumbing, and electrical service across Maryland and Northern Virginia. Schedule online or call our 24/7 emergency line.",
};

const contactFaqs = faqs.slice(0, 3);

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Maven Home Services"
        description="Schedule a service appointment, request an estimate, or reach our 24/7 emergency dispatch line. We respond to all inquiries within 15 minutes during business hours."
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
                      24/7 emergency line available
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

            <ScheduleForm title="Schedule a Service" />
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
