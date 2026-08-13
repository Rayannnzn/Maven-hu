import Image from "next/image";
import Link from "next/link";
import { company, containerClass, sectionClass } from "@/lib/site";
import { Button } from "@/components/ui/button";

const trustPills = [
  { icon: "verified", label: "Insured Professionals" },
  { icon: "receipt_long", label: "Upfront Pricing" },
  { icon: "bolt", label: "Same-Day Appointments" },
];

export default function HeroSection() {
  return (
    <section className={`${sectionClass} bg-primary text-white`}>
      <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-2 lg:gap-14`}>
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-maven-red/35 bg-maven-red/18 px-4 py-1.5">
            <span className="material-icons-round text-sm text-maven-red">emergency</span>
            <span className="text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
              Emergency Service Available
            </span>
          </div>

          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Trusted HVACccccc, Plumbing{" "}
            <span className="text-maven-gold">&amp; Electrical Services</span>
            <br />
            in Maryland &amp; Northern Virginia
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/72 md:text-lg">
            {company.name} provides licensed HVAC, plumbing, and electrical
            repair and installation for homeowners in Rockville, Bethesda,
            Silver Spring, Gaithersburg, Frederick, and surrounding Maryland and
            Northern Virginia communities. Same-day appointments are available,
            all technicians are insured and background-checked, and every job
            includes an upfront written estimate before work begins.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              <a href={company.phoneHref}>
                <span className="material-icons-round text-xl">phone</span>
                Call Now {company.phone}
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {trustPills.map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm"
              >
                <span className="material-icons-round text-base text-maven-gold sm:text-lg">
                  {pill.icon}
                </span>
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/3.5] overflow-hidden rounded-2xl bg-maven-deep sm:aspect-[460/420]">
            <Image
              src="/images/home/hero.png"
              alt="Team of Maven Services technicians on the job"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-contain"
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-xl bg-white p-4 shadow-lg">
              <span className="material-icons-round shrink-0 text-lg text-maven-gold">
                home
              </span>
              <div className="text-sm font-bold leading-tight text-primary">
                Trusted by homeowners throughout Maryland.
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary sm:size-10">
                <span className="material-icons-round text-lg text-maven-gold sm:text-xl">
                  schedule
                </span>
              </div>
              <div>
                <div className="text-xs font-bold leading-tight text-primary sm:text-sm">
                  Estimated Arrival
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  Times vary by location and technician availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
