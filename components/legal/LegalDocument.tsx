import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import type { LegalBlock, LegalDocument } from "@/lib/legal";
import { addressLines, company, containerClass, sectionClass } from "@/lib/site";

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-maven-red">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function LegalDocumentView({ doc }: { doc: LegalDocument }) {
  const toc = [...doc.sections, { id: "contact-us", title: "Contact Us" }];

  return (
    <>
      <Breadcrumbs items={[{ label: doc.title }]} />
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        description={`Effective date: ${doc.effectiveDate}`}
        dark={false}
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={`${containerClass} grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16`}>
          <nav aria-label="On this page" className="lg:sticky lg:top-44 lg:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              On this page
            </p>
            <ol className="flex flex-col gap-2 border-l border-border pl-4 text-sm">
              {toc.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted-foreground hover:text-maven-red"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="flex max-w-3xl flex-col gap-10 text-base leading-relaxed text-muted-foreground">
            <div className="flex flex-col gap-4">
              {doc.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {doc.sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="flex scroll-mt-48 flex-col gap-4 lg:scroll-mt-44"
              >
                <h2 className="text-xl font-bold text-primary md:text-2xl">
                  {i + 1}. {section.title}
                </h2>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </section>
            ))}

            <section
              id="contact-us"
              className="flex scroll-mt-48 flex-col gap-4 lg:scroll-mt-44"
            >
              <h2 className="text-xl font-bold text-primary md:text-2xl">
                {doc.sections.length + 1}. Contact Us
              </h2>
              <p>
                If you have questions about this {doc.title}, or would like to
                make a request regarding your information, please contact us:
              </p>
              <div className="rounded-2xl bg-muted p-6">
                <p className="font-bold text-primary">{company.name}</p>
                <address className="mt-2 not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-3">
                  Phone:{" "}
                  <a href={company.phoneHref} className="font-semibold text-primary hover:text-maven-red">
                    {company.phone}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="font-semibold text-primary hover:text-maven-red"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
              <p className="text-sm">
                See also our{" "}
                <Link href="/privacy-policy" className="font-semibold text-primary hover:text-maven-red">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="/terms-of-service" className="font-semibold text-primary hover:text-maven-red">
                  Terms of Service
                </Link>
                , and{" "}
                <Link href="/site-map" className="font-semibold text-primary hover:text-maven-red">
                  Sitemap
                </Link>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
