import Link from "next/link";
import type { ReactNode } from "react";

// Matches **bold** and [label](href). href may be an internal path, an absolute
// URL, a tel: link, or a same-page #anchor.
const INLINE_PATTERN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

const LINK_CLASS =
  "font-medium text-primary underline decoration-maven-gold/50 underline-offset-2 hover:text-maven-gold";

function renderLink(href: string, label: string, key: string) {
  if (href.startsWith("/")) {
    return (
      <Link key={key} href={href} className={LINK_CLASS}>
        {label}
      </Link>
    );
  }

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      key={key}
      href={href}
      className={LINK_CLASS}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

/**
 * Renders markdown-style `**bold**` and `[label](href)` found inside a plain
 * content string. Strings with no markdown syntax are returned unchanged, so
 * this is safe to wrap around any existing copy.
 */
export function parseInline(text: string) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  INLINE_PATTERN.lastIndex = 0;
  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      parts.push(
        <strong key={`b-${match.index}`} className="font-semibold text-primary">
          {match[1]}
        </strong>,
      );
    } else {
      parts.push(renderLink(match[3], match[2], `l-${match.index}-${match[3]}`));
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
