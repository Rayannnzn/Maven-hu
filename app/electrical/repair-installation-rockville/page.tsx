import type { Metadata } from "next";
import LocalServiceJsonLd from "@/components/service/LocalServiceJsonLd";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { rockvilleAreaServed } from "@/lib/services/rockville-plumbing";
import { rockvilleElectricalRepairInstallationData as data } from "@/lib/services/rockville-electrical-repair-installation";
import { company, siteUrl } from "@/lib/site";

// Static route at the URL the content package specifies. Sits beside the
// [subcategory] route; the slug must never be added to subcategories.ts.
const PAGE_PATH = "/electrical/repair-installation-rockville";
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

export default function RockvilleElectricalRepairInstallationPage() {
  return (
    <>
      <LocalServiceJsonLd
        data={data}
        pageUrl={PAGE_URL}
        businessType="Electrician"
        serviceType="Electrical Repair and Installation"
        areaServed={rockvilleAreaServed}
      />
      <ServicePageLayout data={data} />
    </>
  );
}
