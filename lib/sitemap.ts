/**
 * Single list of every indexable page, shared by the XML sitemap
 * (`app/sitemap.ts` → /sitemap.xml) and the human-readable `/site-map` page.
 *
 * Service subcategory pages and blog posts are derived from their data modules,
 * so adding an entry to `subcategories.ts` or `blog.ts` lists it automatically.
 * Static routes (including one-off pages like the Rockville AC landing page)
 * are listed by hand — add new top-level pages here.
 */
import { getAllPosts } from "@/lib/blog";
import { montgomeryVillageTanklessData } from "@/lib/services/montgomery-village-tankless-water-heater";
import { rockvilleCentralAcData } from "@/lib/services/rockville-central-ac";
import { rockvilleDrainCleaningData } from "@/lib/services/rockville-drain-cleaning";
import { rockvilleEmergencyPlumbingData } from "@/lib/services/rockville-emergency-plumbing";
import { rockvilleBackflowData } from "@/lib/services/rockville-backflow";
import { rockvillePlumbingRepairData } from "@/lib/services/rockville-plumbing-repair";
import { rockvilleWalkInCoolerData } from "@/lib/services/rockville-walk-in-cooler";
import { rockvilleWaterHeaterData } from "@/lib/services/rockville-water-heater";
import { rockvilleWaterMainRepairData } from "@/lib/services/rockville-water-main-repair";
import { getSubcategoryData, getSubcategorySlugs } from "@/lib/services/subcategories";
import { serviceCategories } from "@/lib/site";

export type SitemapLink = {
  href: string;
  label: string;
  lastModified?: string;
  /** In-page anchors shown on /site-map only — never emitted to sitemap.xml. */
  anchors?: { href: string; label: string }[];
};

export type SitemapGroup = {
  title: string;
  links: SitemapLink[];
};

const extraServicePages: Record<string, SitemapLink[]> = {
  "/hvac": [
    {
      href: "/hvac/central-air-conditioning-rockville-md",
      label: rockvilleCentralAcData.title,
    },
    {
      href: "/walk-in-cooler-freezer-service-rockville-md",
      label: rockvilleWalkInCoolerData.title,
    },
  ],
  "/plumbing": [
    {
      href: "/plumbing/drain-cleaning-rockville-md",
      label: rockvilleDrainCleaningData.title,
    },
    {
      href: "/plumbing/emergency-plumbing-rockville-md",
      label: rockvilleEmergencyPlumbingData.title,
    },
    {
      href: "/plumbing/plumbing-repair-rockville-md",
      label: rockvillePlumbingRepairData.title,
    },
    {
      href: "/plumbing/water-main-repair",
      label: rockvilleWaterMainRepairData.title,
    },
    {
      href: "/plumbing/backflow",
      label: rockvilleBackflowData.title,
    },
    {
      href: "/plumbing/water-heaters-rockville-md",
      label: rockvilleWaterHeaterData.title,
    },
    {
      href: "/plumbing/tankless-water-heater-service-montgomery-village-md",
      label: montgomeryVillageTanklessData.title,
    },
  ],
};

export function getSitemapGroups(): SitemapGroup[] {
  const serviceGroups: SitemapGroup[] = serviceCategories.map((category) => {
    const parent = category.href.replace(/^\//, "");
    const anchors = [
      ...(category.groups?.flatMap((group) => group.links) ?? []),
      ...(category.anchorLinks ?? []),
    ];
    const subpages: SitemapLink[] = getSubcategorySlugs(parent).map((slug) => ({
      href: `${category.href}/${slug}`,
      label: getSubcategoryData(parent, slug)?.title ?? slug,
    }));

    return {
      title: category.label,
      links: [
        { href: category.href, label: `${category.label} Overview`, anchors },
        ...subpages,
        ...(extraServicePages[category.href] ?? []),
      ],
    };
  });

  return [
    {
      title: "Company",
      links: [
        { href: "/", label: "Home" },
        { href: "/services", label: "All Services" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact & Scheduling" },
      ],
    },
    ...serviceGroups,
    {
      title: "Blog",
      links: [
        { href: "/blog", label: "All Articles" },
        ...getAllPosts().map((post) => ({
          href: `/blog/${post.slug}`,
          label: post.title,
          lastModified: post.date,
        })),
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/site-map", label: "Sitemap" },
      ],
    },
  ];
}
