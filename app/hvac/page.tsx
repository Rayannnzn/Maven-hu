import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { hvacData } from "@/lib/services/hvac";

export function generateMetadata(): Metadata {
  return {
    title: hvacData.title,
    description: hvacData.metaDescription,
  };
}

export default function HvacPage() {
  return <ServicePageLayout data={hvacData} />;
}
