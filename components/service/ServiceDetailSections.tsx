import Link from "next/link";
import { SectionHeader } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { company, containerClass, sectionClass } from "@/lib/site";
import type { ServiceDetailSection } from "@/lib/services/types";

export default function ServiceDetailSections({
  sections,
}: {
  sections: ServiceDetailSection[];
}) {
  const groupHeaderFlags: boolean[] = [];
  let currentGroup: string | undefined;
  for (const section of sections) {
    const showGroupHeader = Boolean(
      section.group && section.group !== currentGroup,
    );
    if (showGroupHeader) {
      currentGroup = section.group;
    }
    groupHeaderFlags.push(showGroupHeader);
  }

  return (
    <>
      {sections.map((section, index) => {
        const showGroupHeader = groupHeaderFlags[index];
        const bgClass = index % 2 === 0 ? "bg-muted" : "bg-background";

        return (
          <div key={section.id}>
            {showGroupHeader && (
              <section className="border-t border-border bg-primary py-8 text-white md:py-10">
                <div className={containerClass}>
                  <h2 className="text-center text-2xl font-extrabold md:text-3xl">
                    {section.group}
                  </h2>
                </div>
              </section>
            )}

            <section
              id={section.id}
              className={`${sectionClass} ${bgClass} scroll-mt-48 lg:scroll-mt-44`}
            >
              <div className={`${containerClass} max-w-4xl`}>
                <SectionHeader
                  eyebrow={section.group ?? "Service"}
                  title={section.heading}
                  centered={false}
                  className="mb-6"
                />
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  {section.description}
                </p>

                {section.benefits && section.benefits.length > 0 && (
                  <div className="mb-8">
                    <h3 className="mb-4 text-lg font-bold text-primary">
                      Benefits
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {section.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="material-icons-round mt-0.5 shrink-0 text-lg text-maven-gold">
                            check_circle
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.commonProblems && section.commonProblems.length > 0 && (
                  <div className="mb-8">
                    <h3 className="mb-4 text-lg font-bold text-primary">
                      Common Problems We Solve
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {section.commonProblems.map((problem) => (
                        <li
                          key={problem}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="material-icons-round mt-0.5 shrink-0 text-lg text-maven-red">
                            build
                          </span>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="bg-maven-red font-bold hover:bg-[#b81f1f]"
                  >
                    <Link href="/contact">
                      {section.ctaText ?? "Schedule Service"}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary font-semibold text-primary hover:bg-primary/5"
                  >
                    <a href={company.phoneHref}>Call {company.phone}</a>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
}
