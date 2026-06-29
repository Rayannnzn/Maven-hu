import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { electricalData } from "@/lib/services/electrical";

export function generateMetadata(): Metadata {
  return {
    title: electricalData.title,
    description: electricalData.metaDescription,
  };
}

export default function ElectricalPage() {
  return <ServicePageLayout data={electricalData} />;
}
