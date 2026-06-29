import Link from "next/link";
import { company, containerClass } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function EmergencyCta() {
  return (
    <section className="bg-maven-deep py-14 md:py-20 lg:py-24">
      <div className={`${containerClass} text-center`}>
        <span className="material-icons-round mb-4 block text-5xl text-maven-red md:text-[3.25rem]">
          emergency
        </span>
        <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          Need Emergency HVAC, Plumbing
          <br className="hidden sm:block" />
          or Electrical Service?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
          We&apos;re available 24 hours a day, 7 days a week, 365 days a year.
          Real technicians. Real response. No waiting, no answering machines.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            className="h-auto bg-maven-red px-8 py-4 text-base font-extrabold hover:bg-[#b81f1f] md:text-lg"
          >
            <a href={company.phoneHref}>
              <span className="material-icons-round text-2xl">phone</span>
              Call {company.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-auto border-white/32 bg-transparent px-8 py-4 text-base font-bold text-white hover:bg-white/10 hover:text-white md:text-lg"
          >
            <Link href="/contact">Schedule Online</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
