import Link from "next/link";
import { company, containerClass } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function PromoBanner() {
  return (
    <section className="bg-primary py-12 md:py-16 lg:py-20">
      <div
        className={`${containerClass} flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center`}
      >
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-maven-gold">
            Limited Availability — Book Today
          </p>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Need Help Soon?
            <br />
            Same-day appointments available.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/62">
            Our dispatch team is ready to help. Same-day appointments are
            available, subject to technician availability and your location.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white font-extrabold text-primary hover:bg-white/90"
          >
            <a href={company.phoneHref}>
              <span className="material-icons-round text-xl">phone</span>
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-maven-red font-extrabold hover:bg-[#b81f1f]"
          >
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
