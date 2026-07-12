import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeader } from "@/components/shared/PageHero";
import CertificationsSection from "@/components/sections/CertificationsSection";
import VeteransDiscountBanner from "@/components/sections/VeteransDiscountBanner";
import { Button } from "@/components/ui/button";
import { company, containerClass, sectionClass, serviceArea } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Maven Home Services experienced HVAC, plumbing, and electrical professionals based in Rockville, MD, serving Maryland and Northern Virginia.",
};

const stats = [
  { value: "Experienced", label: "Professional field experience" },
  { value: "Local", label: "Based in Rockville, Maryland" },
  { value: "Trusted", label: "By homeowners throughout Maryland" },
  { value: "Responsive", label: "Emergency service available" },
];

const values = [
  {
    icon: "verified",
    title: "Integrity First",
    desc: "We recommend only what your home needs. No upsells, no scare tactics — just honest assessments and transparent pricing on every job.",
  },
  {
    icon: "engineering",
    title: "Craftsmanship",
    desc: "Experienced, highly trained technicians. We invest in ongoing training, proper tools, and quality parts because your home deserves the best.",
  },
  {
    icon: "groups",
    title: "Community Focus",
    desc: "We're headquartered in Rockville and serve Maryland and Northern Virginia communities within a 30-mile radius. Our technicians live in the neighborhoods they serve.",
  },
  {
    icon: "handshake",
    title: "Accountability",
    desc: "We stand behind our work. If something isn't right, let us know and we'll make every reasonable effort to correct it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <PageHero
        eyebrow="Our Story"
        title="Trusted Home Services for Maryland & Northern Virginia"
        description="Maven Home Services was founded on a simple belief: homeowners deserve honest, skilled tradespeople who show up on time, do the job right, and stand behind their work."
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={`${containerClass} max-w-3xl`}>
          <SectionHeader
            eyebrow="Who We Are"
            title="Built for Maryland & Virginia Homeowners"
            centered={false}
            className="mb-8"
          />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Maven Home Services was built on years of professional field
              experience and a commitment to doing things differently. We&apos;ve
              seen too many homeowners overcharged for unnecessary work by
              companies that prioritized sales over service — and we set out to
              be the alternative.
            </p>
            <p>
              Today, Maven is headquartered in Rockville, Maryland and serves
              homeowners across Montgomery County, Northern Virginia, and
              surrounding communities within a {serviceArea.radiusMiles}-mile
              radius. Our team of experienced HVAC technicians, plumbers, and
              electricians handles everything from emergency repairs to full
              system installations — all under one trusted name.
            </p>
            <p>
              What sets us apart isn&apos;t just our technical skill. It&apos;s
              how we treat your home. Shoe covers on entry. Work areas
              protected. Jobsites left clean. Upfront written estimates before
              any work begins. And a real person on the other end of our line
              when you reach out.
            </p>
            <p>
              We&apos;re not the biggest home services company in the DMV. But
              we&apos;re the one our customers call back — and recommend to
              their neighbors.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-primary text-white`}>
        <div className={containerClass}>
          <SectionHeader
            eyebrow="By the Numbers"
            title="Maven at a Glance"
            subtitle="Reliable service across Maryland and Northern Virginia."
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-maven-gold md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/72">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationsSection />

      <section className={`${sectionClass} bg-muted`}>
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide every technician on every job."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-2xl bg-card p-6 shadow-sm"
              >
                <span className="material-icons-round shrink-0 text-3xl text-maven-red">
                  {value.icon}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VeteransDiscountBanner />

      <section className="bg-maven-red py-12 text-white md:py-16">
        <div
          className={`${containerClass} flex flex-col items-center gap-6 text-center`}
        >
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Experience the Maven Difference
          </h2>
          <p className="max-w-lg text-white/80">
            Join Maryland and Virginia homeowners who trust Maven for HVAC,
            plumbing, and electrical services. Schedule your first appointment
            today.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-maven-gold font-extrabold text-primary hover:bg-[#e6a800]"
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={company.phoneHref}>Call {company.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
