import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import ScheduleForm from "@/components/shared/ScheduleForm";
import { subcontractorService } from "@/lib/leads";
import {
  addressLines,
  company,
  containerClass,
  sectionClass,
} from "@/lib/site";

const pitch =
  "MAVEN partners with skilled, reliable trade professionals across Maryland and Northern Virginia. If you specialize in HVAC/R, plumbing, electrical, roofing, or general repair and want steady commercial and residential work, we’d like to hear from you.";

const requirements = [
  "An active trade license for their state and specialty",
  "General liability insurance, plus workers’ comp if applicable",
  "Availability for scheduled and emergency calls",
  "A commitment to clean, professional work on-site",
];

export const metadata: Metadata = {
  title: "Become a Subcontractor",
  description:
    "MAVEN partners with skilled, reliable HVAC/R, plumbing, electrical, roofing, and general repair professionals across Maryland and Northern Virginia for steady commercial and residential work.",
  alternates: { canonical: "/become-a-subcontractor" },
};

export default function BecomeASubcontractorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Become a Subcontractor" }]} />
      <PageHero
        eyebrow="Partner With Maven"
        title="Become a Subcontractor"
        description={pitch}
        dark={false}
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={containerClass}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-primary">
                To be considered, subcontractors should have:
              </h2>
              <ul className="flex flex-col gap-4">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="material-icons-round mt-0.5 shrink-0 text-xl text-maven-red"
                      aria-hidden
                    >
                      check_circle
                    </span>
                    <span className="text-base leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                <dl className="mt-4 flex flex-col gap-4 text-sm">
                  <div className="flex gap-3">
                    <span
                      className="material-icons-round text-xl text-maven-red"
                      aria-hidden
                    >
                      email
                    </span>
                    <div>
                      <dt className="font-semibold text-primary">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${company.email}`}
                          className="text-muted-foreground hover:text-maven-red hover:underline"
                        >
                          {company.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span
                      className="material-icons-round text-xl text-maven-red"
                      aria-hidden
                    >
                      phone
                    </span>
                    <div>
                      <dt className="font-semibold text-primary">Phone</dt>
                      <dd>
                        <a
                          href={company.phoneHref}
                          className="text-muted-foreground hover:text-maven-red hover:underline"
                        >
                          {company.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span
                      className="material-icons-round text-xl text-maven-red"
                      aria-hidden
                    >
                      location_on
                    </span>
                    <div>
                      <dt className="font-semibold text-primary">Office</dt>
                      <dd>
                        <address className="not-italic leading-relaxed text-muted-foreground">
                          {addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            <div>
              <ScheduleForm
                title="Tell Us About Your Business"
                defaultService={subcontractorService}
                messageLabel="Trade, Service Area & Credentials"
                messagePlaceholder="Your trade and specialty, counties you cover, license number, and whether you carry general liability and workers’ comp..."
                submitLabel="Send Inquiry →"
                successTitle="Inquiry received"
                successMessage="Thanks for your interest in partnering with Maven. A confirmation is on its way to your inbox, and a member of our team will review your details and follow up."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
