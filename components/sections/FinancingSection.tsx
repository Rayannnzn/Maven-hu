import Link from "next/link";
import { containerClass, sectionClass } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  "Promotional financing may be available for qualified customers",
  "Monthly payment options on major HVAC, plumbing, and electrical projects",
  "Applications reviewed by third-party lending partners",
  "Terms, rates, and eligibility set by the lender",
];

const plans = [
  {
    name: "Monthly Payment Plans",
    badge: "Flexible",
    desc: "Spread the cost of qualifying repairs and installations over time with fixed monthly payments.",
  },
  {
    name: "Extended Payment",
    desc: "Longer repayment terms may be available for larger system replacements, subject to lender approval.",
  },
  {
    name: "Promotional Offers",
    desc: "Promotional financing may be available for qualified customers on select purchases. Ask our office for current offers.",
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
            Flexible Financing Options
          </h2>
          <p className="mb-7 text-base leading-relaxed text-[#4a5568]">
            Don&apos;t let budget concerns delay critical repairs or important
            upgrades. Maven works with third-party lending partners, and
            promotional financing may be available for qualified customers.
            Terms, rates, and eligibility are determined by the lender.
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
