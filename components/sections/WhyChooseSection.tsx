import { features } from "@/lib/content";
import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyChooseSection() {
  return (
    <section className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Why Maven"
          title="Why Maryland & Northern Virginia Homeowners Choose Maven"
          subtitle="We hold every job to the same standard: licensed work, honest pricing, and service you can count on every time."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => (
            <Card key={feat.title} className="gap-0 border-0 py-0 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-primary">
                  <span className="material-icons-round text-[22px] text-white">
                    {feat.icon}
                  </span>
                </div>
                <h3 className="mb-2.5 text-base font-bold text-primary md:text-lg">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feat.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
