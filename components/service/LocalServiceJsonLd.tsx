import { address, company, siteUrl } from "@/lib/site";
import type { ServicePageData } from "@/lib/services/types";

// Escapes "<" so a value can never close the surrounding <script> tag.
function serialize(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

/**
 * LocalBusiness subtype + Service + FAQPage JSON-LD for a standalone local
 * landing page. The FAQ entries map over the same `data.faqs` the accordion
 * renders, so the markup can never claim a question that is not on the page.
 */
export default function LocalServiceJsonLd({
  data,
  pageUrl,
  businessType,
  serviceType,
  areaServed,
}: {
  data: ServicePageData;
  pageUrl: string;
  /** schema.org LocalBusiness subtype, e.g. "Plumber". */
  businessType: string;
  serviceType: string;
  areaServed: string[];
}) {
  const cities = areaServed.map((city) => ({ "@type": "City", name: city }));
  const businessId = `${pageUrl}#business`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": businessType,
    "@id": businessId,
    name: company.name,
    description: data.metaDescription,
    url: pageUrl,
    telephone: company.phone,
    email: company.email,
    image: `${siteUrl}${data.heroImage}`,
    logo: `${siteUrl}${company.logo}`,
    sameAs: [company.googleBusinessProfile],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.suite}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    areaServed: cities,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.heroTitle,
    serviceType,
    description: data.metaDescription,
    url: pageUrl,
    provider: { "@id": businessId },
    areaServed: cities,
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
      {[businessSchema, serviceSchema, faqSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(schema) }}
        />
      ))}
    </>
  );
}
