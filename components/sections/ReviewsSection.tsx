import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";

const trustPoints = [
  {
    icon: "engineering",
    title: "Experienced Technicians",
    desc: "Experienced, highly trained technicians handle every HVAC, plumbing, and electrical job with care and professionalism.",
  },
  {
    icon: "receipt_long",
    title: "Upfront Pricing",
    desc: "You receive a clear estimate before any work begins. No hidden fees and no pressure to approve unnecessary repairs.",
  },
  {
    icon: "home",
    title: "Local & Reliable",
    desc: "Trusted by homeowners throughout Maryland and Northern Virginia for dependable service and quality workmanship on every visit.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Why Homeowners Choose Us"
          title="Trusted by Homeowners Throughout Maryland"
          subtitle="We stand behind our work with professional service and clear, honest communication."
        />

        <div className="grid gap-6 md:grid-cols-3 lg:gap-7">
          {trustPoints.map((point) => (
            <Card key={point.title} className="gap-0 border-0 py-0 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary">
                  <span className="material-icons-round text-2xl text-maven-gold">
                    {point.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4a5568]">
                  {point.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
