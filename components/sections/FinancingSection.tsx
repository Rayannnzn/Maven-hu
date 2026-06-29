import Link from "next/link";
import { containerClass, sectionClass } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  "0% interest for 12–18 months on qualifying HVAC equipment",
  "Low monthly payments on major plumbing and electrical projects",
  "Quick credit decisions — approval in minutes",
  "No prepayment penalties on any plan",
];

const plans = [
  {
    name: "Same-As-Cash",
    badge: "Popular",
    desc: "0% interest for 12 months. Pay in full within the term and pay no interest whatsoever.",
  },
  {
    name: "Extended Payment",
    desc: "Low fixed monthly payments spread over 24–60 months. Ideal for larger system replacements.",
  },
  {
    name: "Deferred Interest",
    desc: "0% interest for 18 months on qualifying purchases. For approved applicants only.",
  },
];

export default function FinancingSection() {
  return (
    <section id="financing" className={`${sectionClass} bg-background`}>
      <div
        className={`${containerClass} grid items-start gap-10 lg:grid-cols-2 lg:gap-16`}
      >
        <div className="min-w-0">
          <span className="eyebrow mb-5">Financing</span>
          <h2 className="section-heading mb-4 text-left">
            0% Interest Financing Available
          </h2>
          <p className="mb-7 text-base leading-relaxed text-[#4a5568]">
            Don&apos;t let budget concerns delay critical repairs or important upgrades.
            Maven partners with leading financing companies to offer affordable monthly
            payment options with fast approvals.
          </p>
          <ul className="mb-8 flex flex-col gap-3.5">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                <span className="material-icons-round mt-0.5 shrink-0 text-xl text-maven-red">
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="font-bold">
            <Link href="/contact">
              Apply for Financing
              <span className="material-icons-round text-lg">arrow_forward</span>
            </Link>
          </Button>
        </div>

        <div className="rounded-2xl bg-muted p-6 md:p-8">
          <h3 className="mb-5 text-base font-bold text-primary md:text-lg">
            Financing Plans
          </h3>
          <div className="flex flex-col gap-3.5">
            {plans.map((plan) => (
              <Card key={plan.name} className="gap-0 border-[1.5px] py-0 shadow-none">
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="font-bold text-primary">{plan.name}</div>
                    {plan.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-red-50 text-[11px] font-bold text-maven-red"
                      >
                        {plan.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {plan.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
