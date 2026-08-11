import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { plumbingData } from "@/lib/services/plumbing";

export function generateMetadata(): Metadata {
  return {
    // `absolute` keeps the SEO title exactly as written — the root layout's
    // "%s | Maven Home Services" template would otherwise double the brand.
    title: plumbingData.seoTitle
      ? { absolute: plumbingData.seoTitle }
      : plumbingData.title,
    description: plumbingData.metaDescription,
  };
}

export default function PlumbingPage() {
  return <ServicePageLayout data={plumbingData} />;
}
