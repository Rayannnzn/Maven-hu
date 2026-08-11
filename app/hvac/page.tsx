import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { hvacData } from "@/lib/services/hvac";

export function generateMetadata(): Metadata {
  return {
    // `absolute` keeps the SEO title exactly as written — the root layout's
    // "%s | Maven Home Services" template would otherwise double the brand.
    title: hvacData.seoTitle
      ? { absolute: hvacData.seoTitle }
      : hvacData.title,
    description: hvacData.metaDescription,
  };
}

export default function HvacPage() {
  return <ServicePageLayout data={hvacData} />;
}
