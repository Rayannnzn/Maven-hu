import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { rockvilleCentralAcData as data } from "@/lib/services/rockville-central-ac";
import { address, company, serviceCities, siteUrl } from "@/lib/site";

// A static segment beside app/hvac/[subcategory]/. Next matches this folder first,
// and the slug is intentionally absent from lib/services/subcategories.ts, so
// generateStaticParams never emits a conflicting path.
const PAGE_PATH = "/hvac/central-air-conditioning-rockville-md";
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

// Escapes "<" so a value can never close the surrounding <script> tag.
function serialize(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

// HVACBusiness (a LocalBusiness subtype) + FAQPage, as the content package asks
// for. The FAQ entries map over the same `data.faqs` the accordion renders, so the
// markup can never claim a question that is not visible on the page.
function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": PAGE_URL,
    name: company.name,
    description: data.metaDescription,
    url: PAGE_URL,
    telephone: company.phone,
    email: company.email,
    image: `${siteUrl}${data.heroImage}`,
    logo: `${siteUrl}${company.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.suite}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    areaServed: serviceCities.map((city) => ({ "@type": "City", name: city })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(faqSchema) }}
      />
    </>
  );
}

export default function RockvilleCentralAcPage() {
  return (
    <>
      <JsonLd />
      <ServicePageLayout data={data} />
    </>
  );
}
