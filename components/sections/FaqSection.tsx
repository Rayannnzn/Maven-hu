import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/content";
import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Common questions from homeowners and property managers.",
  id = "faq",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${sectionClass} bg-background`}>
      <div className={`${containerClass} max-w-3xl`}>
        <SectionHeader eyebrow="FAQ" title={title} subtitle={subtitle} />
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="rounded-xl border px-1"
            >
              <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-[#4a5568]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
