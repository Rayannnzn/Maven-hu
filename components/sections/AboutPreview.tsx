import Image from "next/image";
import { company, containerClass, sectionClass } from "@/lib/site";

const stats = [
  { value: "15+", label: "Years Experience", highlight: false },
  { value: "5,000+", label: "Jobs Completed", highlight: false },
  { value: "4,800+", label: "Happy Customers", highlight: false },
  { value: "24/7", label: "Emergency Support", highlight: true },
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
            {company.name} was founded in {company.founded} by licensed tradespeople
            who believed homeowners deserved better. We built a company where every
            technician is background-checked, every quote is written, and every job
            is done right — the first time.
          </p>
          <p className="mb-8 text-base leading-relaxed text-[#4a5568] md:mb-10">
            Today, Maven serves thousands of homeowners, property managers, and
            businesses across {company.serviceRegion} with a full team of certified
            HVAC, plumbing, and electrical professionals.
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
                  className={`text-3xl font-black leading-none tracking-tight md:text-[2.375rem] ${
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
