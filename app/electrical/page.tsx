import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { electricalData } from "@/lib/services/electrical";

export function generateMetadata(): Metadata {
  return {
    // `absolute` keeps the SEO title exactly as written — the root layout's
    // "%s | Maven Home Services" template would otherwise double the brand.
    title: electricalData.seoTitle
      ? { absolute: electricalData.seoTitle }
      : electricalData.title,
    description: electricalData.metaDescription,
  };
}

export default function ElectricalPage() {
  return <ServicePageLayout data={electricalData} />;
}
