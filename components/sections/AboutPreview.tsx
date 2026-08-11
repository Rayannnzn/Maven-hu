import Image from "next/image";
import { company, containerClass, sectionClass, serviceArea } from "@/lib/site";

const stats = [
  { value: "Experienced", label: "Professional field experience", highlight: false },
  { value: "Local", label: "Serving Maryland & Northern Virginia", highlight: false },
  { value: "Trusted", label: "By homeowners throughout Maryland", highlight: false },
  { value: "Responsive", label: "Emergency service available", highlight: true },
];

export default function AboutPreview() {
  return (
    <section id="about" className={`${sectionClass} bg-background`}>
      <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div className="min-w-0">
          <span className="eyebrow mb-5">About Maven</span>
          <h2 className="section-heading mb-5 text-left">
            Built on Skill, Integrity, and Results
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#4a5568]">
            Founded by tradespeople with direct field experience in HVAC,
            plumbing, and electrical work, {company.name} is based in Rockville,
            Maryland, and serves homeowners, property managers, and businesses
            within a {serviceArea.radiusMiles}-mile service radius across
            Maryland and Northern Virginia.
          </p>
          <p className="mb-8 text-base leading-relaxed text-[#4a5568] md:mb-10">
            Today, Maven serves homeowners, property managers, and businesses
            across {company.serviceRegion} with an experienced team of HVAC,
            plumbing, and electrical professionals.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-5 md:p-6 ${
                  stat.highlight ? "bg-maven-red text-white" : "bg-muted"
                }`}
              >
                <div
                  className={`text-xl font-black leading-tight tracking-tight md:text-2xl ${
                    stat.highlight ? "text-white" : "text-primary"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`mt-1.5 text-xs font-bold uppercase tracking-widest ${
                    stat.highlight ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[420/480] overflow-hidden rounded-2xl bg-[#EFF3FA]">
            <Image
              src="/images/about-van.jpg"
              alt="Maven service van fleet"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
