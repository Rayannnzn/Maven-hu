import Link from "next/link";
import { containerClass, veteransDiscount } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function VeteransDiscountBanner() {
  return (
    <section className="bg-maven-red py-12 text-white md:py-16 lg:py-20">
      <div
        className={`${containerClass} flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center`}
      >
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="material-icons-round text-3xl text-maven-gold">
              military_tech
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-maven-gold">
              {veteransDiscount.audience}
            </p>
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            {veteransDiscount.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/85">
            {veteransDiscount.description}
          </p>
          <p className="mt-2 text-sm text-white/60">
            Valid military or first responder ID required at time of service.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
          <Button
            asChild
            size="lg"
            className="bg-maven-gold font-extrabold text-primary hover:bg-[#e6a800]"
          >
            <Link href={veteransDiscount.ctaHref}>
              {veteransDiscount.ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
