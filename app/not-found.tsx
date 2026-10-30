import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";
import {
  company,
  containerClass,
  sectionClass,
  serviceCategories,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: `The page you requested could not be found. Browse Maven Home Services' HVAC, plumbing, and electrical services or call ${company.phone}.`,
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "All Services" },
  { href: "/about", label: "About Maven" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/site-map", label: "Site Map" },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="We Couldn't Find That Page"
        description="The link may be out of date, or the address may have been typed incorrectly. The service you're looking for is likely one of the categories below — or give us a call and we'll point you in the right direction."
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={containerClass}>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
            Browse Our Services
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => {
              const summary = services.find(
                (service) => service.name === category.label,
              );
              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-maven-red"
                >
                  <div className="mb-4 flex size-[48px] items-center justify-center rounded-[10px] bg-primary">
                    <span className="material-icons-round text-[24px] text-maven-gold">
                      {summary?.icon ?? "home_repair_service"}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-primary group-hover:text-maven-red">
                    {category.label}
                  </h3>
                  {summary && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {summary.desc}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-maven-red">
                    Explore {category.label}
                    <span className="material-icons-round text-base">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-muted`}>
        <div className={`${containerClass} max-w-3xl text-center`}>
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
            Looking for Something Else?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            Jump to one of our main pages, or reach our team directly. We serve
            homeowners and businesses across Maryland and Northern Virginia.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary hover:border-maven-red hover:text-maven-red"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-bold">
              <Link href="/contact">Schedule Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <a href={company.phoneHref}>Call {company.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
