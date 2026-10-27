import type { Metadata } from "next";
import LocalServiceJsonLd from "@/components/service/LocalServiceJsonLd";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import {
  montgomeryVillageTanklessData as data,
  montgomeryVillageAreaServed,
} from "@/lib/services/montgomery-village-tankless-water-heater";
import { address, company, containerClass, siteUrl } from "@/lib/site";

// A static segment beside app/plumbing/[subcategory]/. Next matches this folder
// first, and the slug is intentionally absent from lib/services/subcategories.ts,
// so generateStaticParams never emits a conflicting path.
const PAGE_PATH = "/plumbing/tankless-water-heater-service-montgomery-village-md";
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

export default function MontgomeryVillageTanklessPage() {
  return (
    <>
      <LocalServiceJsonLd
        data={data}
        pageUrl={PAGE_URL}
        businessType="Plumber"
        serviceType="Tankless Water Heater Service"
        areaServed={montgomeryVillageAreaServed}
      />
      <ServicePageLayout data={data} />
      {/* Map embed near the footer, as the content package's GMB checklist asks. */}
      <section className="bg-muted pb-16 md:pb-20">
        <div className={containerClass}>
          <div className="overflow-hidden rounded-2xl border">
            <iframe
              title="Maven Home Services office location"
              src={address.mapsEmbedUrl}
              className="h-64 w-full border-0 md:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
