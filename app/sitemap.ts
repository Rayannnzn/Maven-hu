import type { MetadataRoute } from "next";
import { getSitemapGroups } from "@/lib/sitemap";
import { siteUrl } from "@/lib/site";

function priority(href: string): number {
  if (href === "/") return 1;
  if (href.split("/").length === 2) return 0.8; // top-level pages
  return href.startsWith("/blog/") ? 0.6 : 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();

  return getSitemapGroups()
    .flatMap((group) => group.links)
    .filter((link) => !seen.has(link.href) && seen.add(link.href))
    .map((link) => ({
      url: `${siteUrl}${link.href === "/" ? "" : link.href}`,
      ...(link.lastModified && { lastModified: link.lastModified }),
      changeFrequency: link.href.startsWith("/blog") ? "weekly" : "monthly",
      priority: priority(link.href),
    }));
}
