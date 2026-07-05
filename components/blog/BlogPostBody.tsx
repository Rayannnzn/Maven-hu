import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogBodyBlock } from "@/lib/blog";

const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)]+)\)/g;

function parseInlineLinks(text: string) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        className="font-medium text-primary underline decoration-maven-gold/50 underline-offset-2 hover:text-maven-gold"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function BlogPostBody({ body }: { body: BlogBodyBlock[] }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-h3:text-primary prose-h3:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground">
      {body.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{parseInlineLinks(block.content)}</p>;
          case "h2":
            return <h2 key={i}>{block.content}</h2>;
          case "h3":
            return <h3 key={i}>{block.content}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.content.map((item) => (
                  <li key={item.slice(0, 30)}>{parseInlineLinks(item)}</li>
                ))}
              </ul>
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
