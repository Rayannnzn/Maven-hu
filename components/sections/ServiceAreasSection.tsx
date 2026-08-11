import Image from "next/image";
import Link from "next/link";
import { containerClass, sectionClass, serviceArea, serviceCities } from "@/lib/site";
import { Button } from "@/components/ui/button";

const mapPins = [
  { label: "Rockville HQ", top: "42%", left: "48%" },
  { label: "Bethesda", top: "38%", left: "52%" },
  { label: "Arlington", top: "55%", left: "58%" },
  { label: "Alexandria", top: "62%", left: "56%" },
  { label: "Fairfax", top: "58%", left: "52%" },
];

export default function ServiceAreasSection() {
  return (
    <section id="areas" className={`${sectionClass} bg-background`}>
      <div className={`${containerClass} grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16`}>
        <div className="min-w-0">
          <span className="eyebrow mb-5">Where We Work</span>
          <h2 className="section-heading mb-4 text-left">
            Service Areas — Maryland &amp; Northern Virginia
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            {serviceArea.description} Contact us to confirm availability in your
            area.
          </p>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#dce4f0] sm:aspect-[5/4]">
            <Image
              src={serviceArea.mapImage}
              alt="Map of Maven service areas across Maryland and Northern Virginia"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
            {mapPins.map((pin) => (
              <span
                key={pin.label}
                className="material-icons-round absolute text-primary drop-shadow-md"
                style={{
                  top: pin.top,
                  left: pin.left,
                  fontSize: 28,
                  transform: "translate(-50%, -100%)",
                }}
                title={pin.label}
                aria-hidden
              >
                location_on
              </span>
            ))}
          </div>
        </div>

        <div className="lg:pt-16">
          <h3 className="mb-1.5 text-lg font-bold text-primary md:text-xl">
            Cities We Serve
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Within {serviceArea.radiusMiles} miles of our Rockville office —
            Maryland and Northern Virginia communities.
          </p>
          <div className="border-t border-border">
            <div className="grid grid-cols-2">
              {serviceCities.map((city, i) => (
                <div
                  key={city}
                  className={`border-b border-border py-2.5 text-sm font-medium text-foreground ${
                    i % 2 === 0 ? "pr-3" : "pl-0"
                  }`}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-2.5 text-xs text-muted-foreground/80">
            + many more neighborhoods and ZIP codes within our service radius
          </p>
          <Button asChild className="mt-5 font-bold">
            <Link href="/contact">
              <span className="material-icons-round text-lg">location_on</span>
              Check My Area
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
