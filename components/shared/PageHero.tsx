import Link from "next/link";
import { company, containerClass, sectionClass } from "@/lib/site";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={`${sectionClass} ${dark ? "bg-primary text-white" : "bg-muted"}`}
    >
      <div className={`${containerClass} max-w-3xl`}>
        {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
        <h1 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-white/72" : "text-muted-foreground"}`}
          >
            {description}
          </p>
        )}
        {dark && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        )}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""} ${className}`}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p className={`section-subheading ${centered ? "" : "mx-0"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
