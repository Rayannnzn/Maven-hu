import Link from "next/link";
import { Fragment } from "react";
import { parseInline } from "@/components/shared/inlineText";
import type { BlogBodyBlock } from "@/lib/blog";

// Section headings clear the sticky header when reached from a table-of-contents link.
const ANCHOR_OFFSET = "scroll-mt-48 lg:scroll-mt-44";

export default function BlogPostBody({ body }: { body: BlogBodyBlock[] }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-h3:text-primary prose-h3:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground">
      {body.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{parseInline(block.content)}</p>;
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className={block.id ? ANCHOR_OFFSET : undefined}
              >
                {block.content}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className={block.id ? ANCHOR_OFFSET : undefined}
              >
                {block.content}
              </h3>
            );
          case "ul":
            return (
              <ul key={i}>
                {block.content.map((item) => (
                  <li key={item.slice(0, 30)}>{parseInline(item)}</li>
                ))}
              </ul>
            );
          // One paragraph whose source kept its own line breaks (address block,
          // link rows) — rendered as written rather than reflowed.
          case "lines":
            return (
              <p key={i}>
                {block.content.map((line, j) => (
                  <Fragment key={j}>
                    {j > 0 && <br />}
                    {parseInline(line)}
                  </Fragment>
                ))}
              </p>
            );
          case "toc":
            return (
              <nav
                key={i}
                aria-label={block.title}
                className="not-prose my-8 rounded-2xl border border-border bg-muted/50 p-6"
              >
                <h2 className="text-lg font-bold text-primary">{block.title}</h2>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li key={item.href} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maven-gold"
                      />
                      <a
                        href={item.href}
                        className="text-base leading-relaxed text-muted-foreground underline decoration-maven-gold/40 underline-offset-4 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          case "faq":
            return (
              <div key={i} className="not-prose my-8 space-y-4">
                {block.items.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <h3 className="text-base font-bold text-primary md:text-lg">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {parseInline(item.answer)}
                    </p>
                  </div>
                ))}
              </div>
            );
          case "cta":
            return (
              <p key={i} className="not-prose mt-6">
                <Link
                  href={block.href}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-maven-gold px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-[#e6a800]"
                >
                  {block.text}
                </Link>
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
