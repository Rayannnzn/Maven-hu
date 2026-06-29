import { reviews } from "@/lib/content";
import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";

const ratingBreakdown = [
  { label: "5 stars — 94%", widthClass: "w-[94%]" },
  { label: "4 stars — 4%", widthClass: "w-[4%]" },
  { label: "3 stars — 1%", widthClass: "w-[1%]" },
  { label: "2 stars — 1%", widthClass: "w-0" },
  { label: "1 star — 0%", widthClass: "w-0" },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted by Thousands of Homeowners"
        />

        <div className="mb-10 flex flex-col items-center justify-center gap-8 md:mb-14 md:flex-row md:gap-10">
          <div className="text-center">
            <div className="text-5xl font-black leading-none tracking-tight text-primary md:text-6xl">
              4.9
            </div>
            <div className="mt-1.5 text-xl tracking-[0.2em] text-maven-gold md:text-2xl">
              ★★★★★
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">
              1,200+ Google Reviews
            </div>
          </div>

          <div className="hidden h-20 w-px bg-border md:block" />

          <div className="flex w-full max-w-sm flex-col gap-2">
            {ratingBreakdown.map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                  <div
                    className={`h-full rounded-full bg-maven-gold ${row.widthClass}`}
                  />
                </div>
                <span className="min-w-[5.5rem] text-xs font-medium text-muted-foreground">
                  {row.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {reviews.map((rev) => (
            <Card key={rev.name} className="gap-0 border-0 py-0 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-lg tracking-widest text-maven-gold">{rev.stars}</div>
                  <div className="flex size-7 items-center justify-center rounded-full bg-muted text-sm font-black text-[#4285F4]">
                    G
                  </div>
                </div>
                <p className="mb-5 text-sm italic leading-relaxed text-[#4a5568]">
                  &quot;{rev.text}&quot;
                </p>
                <div className="flex items-center gap-3 border-t border-muted pt-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EFF3FA]">
                    <span className="material-icons-round text-lg text-primary">person</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary">{rev.name}</div>
                    <div className="text-xs text-muted-foreground">{rev.loc}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
