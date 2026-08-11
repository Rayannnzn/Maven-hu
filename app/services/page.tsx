import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import EmergencyCta from "@/components/sections/EmergencyCta";
import ContactSection from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";
import {
  company,
  containerClass,
  getCategoryNavItems,
  sectionClass,
  serviceCategories,
} from "@/lib/site";

const introduction =
  "Maven offers HVAC, plumbing, and electrical installation, repair, and maintenance across Maryland and Northern Virginia — including AC repair, heat pump and geothermal installation, water heater replacement, drain cleaning, panel upgrades, and EV charger installation.";

export const metadata: Metadata = {
  title: "All Services",
  description: `${introduction} Call ${company.phone}.`,
};

/** Homepage card copy, keyed by the matching service category label. */
function getCategorySummary(label: string): string | undefined {
  return services.find((service) => service.name === label)?.desc;
}

function getCategoryIcon(label: string): string | undefined {
  return services.find((service) => service.name === label)?.icon;
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      <PageHero
        eyebrow="Our Services"
        title="Complete Home Service Solutions for Maryland & Northern Virginia Homeowners"
        description={introduction}
      />

      {serviceCategories.map((category, index) => {
        const navItems = getCategoryNavItems(category);
        const anchorItems = navItems.filter(
          (item) => item.section !== "featured",
        );
        const featuredItems = navItems.filter(
          (item) => item.section === "featured",
        );
        // Preserve the order groups appear in, so headings match the nav menu.
        const groups = [
          ...new Set(anchorItems.map((item) => item.group ?? "")),
        ];

        return (
          <section
            key={category.href}
            className={`${sectionClass} ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
          >
            <div className={containerClass}>
              <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
                <div>
                  <div className="mb-5 flex size-[52px] items-center justify-center rounded-[11px] bg-primary">
                    <span className="material-icons-round text-[26px] text-maven-gold">
                      {getCategoryIcon(category.label) ?? "home_repair_service"}
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                    {category.label}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {getCategorySummary(category.label)}
                  </p>
                  <Button asChild className="font-bold">
                    <Link href={category.href}>
                      Explore {category.label}
                      <span className="material-icons-round text-lg">
                        arrow_forward
                      </span>
                    </Link>
                  </Button>
                </div>

                <div className="min-w-0">
                  {groups.map((group) => (
                    <div key={group || category.href} className="mb-8 last:mb-0">
                      {group && (
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {group}
                        </h3>
                      )}
                      <ul className="grid gap-x-8 border-t border-border sm:grid-cols-2">
                        {anchorItems
                          .filter((item) => (item.group ?? "") === group)
                          .map((item) => (
                            <li
                              key={item.href}
                              className="border-b border-border"
                            >
                              <Link
                                href={item.href}
                                className="flex items-center justify-between gap-3 py-3 text-sm font-medium text-foreground hover:text-maven-red"
                              >
                                {item.label}
                                <span className="material-icons-round text-base text-maven-red">
                                  chevron_right
                                </span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}

                  {featuredItems.length > 0 && (
                    <div>
                      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Featured Pages
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {featuredItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary hover:border-maven-red hover:text-maven-red"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <EmergencyCta />
      <ContactSection />
    </>
  );
}
