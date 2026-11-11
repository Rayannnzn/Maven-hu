import type { Metadata } from "next";
import LocalServiceJsonLd from "@/components/service/LocalServiceJsonLd";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { rockvilleAreaServed } from "@/lib/services/rockville-plumbing";
import { rockvilleElectricalInspectionsData as data } from "@/lib/services/rockville-electrical-inspections";
import { company, siteUrl } from "@/lib/site";

// Static route at the URL the content package specifies. Sits beside the
// [subcategory] route; the slug must never be added to subcategories.ts.
const PAGE_PATH = "/electrical/inspections-rockville";
const PAGE_URL = `${siteUrl}${PAGE_PATH}`;

export function generateMetadata(): Metadata {
  return {
    // `absolute` keeps the SEO title exactly as written — the root layout's
    // "%s | Maven Home Services" template would otherwise double the brand.
    title: data.seoTitle ? { absolute: data.seoTitle } : data.title,
    description: data.metaDescription,
    alternates: { canonical: PAGE_URL },
    openGraph: {
      title: data.seoTitle ?? data.title,
      description: data.metaDescription,
      url: PAGE_URL,
      type: "website",
      siteName: company.name,
    },
  };
}

export default function RockvilleElectricalInspectionsPage() {
  return (
    <>
      <LocalServiceJsonLd
        data={data}
        pageUrl={PAGE_URL}
        businessType="Electrician"
        serviceType="Electrical Inspections"
        areaServed={rockvilleAreaServed}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
