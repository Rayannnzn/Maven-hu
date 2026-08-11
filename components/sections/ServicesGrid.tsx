import Link from "next/link";
import { services } from "@/lib/content";
import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function getServiceHref(name: string): string {
  if (name === "HVAC") return "/hvac";
  if (name === "Plumbing") return "/plumbing";
  if (name === "Electrical") return "/electrical";
  if (name === "Commercial") return "/commercial";
  if (name.includes("Air Conditioning") || name.includes("Cooling")) return "/hvac";
  if (name.includes("Maintenance")) return "/contact";
  return "/contact";
}

export default function ServicesGrid() {
  return (
    <section id="services" className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Our Services"
          title="Complete Home Service Solutions for Maryland & Northern Virginia Homeowners"
          subtitle="Maven offers HVAC, plumbing, and electrical installation, repair, and maintenance across Maryland and Northern Virginia — including AC repair, heat pump and geothermal installation, water heater replacement, drain cleaning, panel upgrades, and EV charger installation."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {services.map((svc) => (
            <Card
              key={svc.name}
              className="gap-0 border-[1.5px] py-0 shadow-none transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col p-6 md:p-8">
                <div className="mb-5 flex size-[52px] items-center justify-center rounded-[11px] bg-[#EFF3FA]">
                  <span className="material-icons-round text-[26px] text-primary">
                    {svc.icon}
                  </span>
                </div>
                <h3 className="mb-2.5 text-lg font-bold text-primary">{svc.name}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {svc.desc}
                </p>
                <Link
                  href={getServiceHref(svc.name)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-maven-red hover:underline"
                >
                  Learn More
                  <span className="material-icons-round text-base">arrow_forward</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center md:mt-12">
          <Button asChild size="lg" className="font-bold">
            <Link href="/services">
              View All Services
              <span className="material-icons-round text-lg">arrow_forward</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
