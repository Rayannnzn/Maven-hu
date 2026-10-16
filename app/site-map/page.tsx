import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { getSitemapGroups } from "@/lib/sitemap";
import { containerClass, sectionClass } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse every page on the Maven Home Services website — HVAC, plumbing, electrical, and commercial services, blog articles, and company information.",
  alternates: { canonical: "/site-map" },
};

export default function SiteMapPage() {
  const groups = getSitemapGroups();

  return (
    <>
      <Breadcrumbs items={[{ label: "Sitemap" }]} />
      <PageHero
        eyebrow="Sitemap"
        title="Find Your Way Around"
        description="Every page on our website in one place — services, articles, and company information."
        dark={false}
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={`${containerClass} columns-1 gap-10 md:columns-2 lg:columns-3`}>
          {groups.map((group) => (
            <div key={group.title} className="mb-10 break-inside-avoid">
              <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-primary">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-semibold text-foreground hover:text-maven-red"
                    >
                      {link.label}
                    </Link>
                    {link.anchors && link.anchors.length > 0 && (
                      <ul className="mt-2 flex flex-col gap-1.5 border-l border-border pl-4">
                        {link.anchors.map((anchor) => (
                          <li key={anchor.href}>
                            <Link
                              href={anchor.href}
                              className="text-muted-foreground hover:text-maven-red"
                            >
                              {anchor.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
