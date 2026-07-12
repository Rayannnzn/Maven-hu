import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { commercialData } from "@/lib/services/commercial";

export function generateMetadata(): Metadata {
  return {
    title: commercialData.title,
    description: commercialData.metaDescription,
  };
}

export default function CommercialPage() {
  return <ServicePageLayout data={commercialData} />;
}
