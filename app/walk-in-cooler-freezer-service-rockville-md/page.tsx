import type { Metadata } from "next";
import LocalServiceJsonLd from "@/components/service/LocalServiceJsonLd";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { rockvilleAreaServed } from "@/lib/services/rockville-plumbing";
import { rockvilleWalkInCoolerData as data } from "@/lib/services/rockville-walk-in-cooler";
import { address, company, containerClass, siteUrl } from "@/lib/site";

// Root-level static route at the URL the content package specifies.
const PAGE_PATH = "/walk-in-cooler-freezer-service-rockville-md";
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

export default function RockvilleWalkInCoolerPage() {
  return (
    <>
      <LocalServiceJsonLd
        data={data}
        pageUrl={PAGE_URL}
        businessType="LocalBusiness"
        serviceType="Walk In Cooler and Freezer Service"
        areaServed={rockvilleAreaServed}
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
