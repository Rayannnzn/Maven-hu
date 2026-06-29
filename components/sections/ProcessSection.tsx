import { steps } from "@/lib/content";
import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";

export default function ProcessSection() {
  return (
    <section className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="How It Works"
          title="Simple. Fast. Reliable."
          subtitle="From booking to completion, we keep you informed at every step of the process."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.num} className="relative gap-0 border-0 py-0 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="mb-3 text-5xl font-black leading-none tracking-tight text-[#EFF3FA] tabular-nums">
                  {step.num}
                </div>
                <div className="mb-4 flex size-11 items-center justify-center rounded-[9px] bg-primary">
                  <span className="material-icons-round text-[22px] text-maven-gold">
                    {step.icon}
                  </span>
                </div>
                <h3 className="mb-2.5 text-base font-bold text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
