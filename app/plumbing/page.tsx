import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { plumbingData } from "@/lib/services/plumbing";

export function generateMetadata(): Metadata {
  return {
    title: plumbingData.title,
    description: plumbingData.metaDescription,
  };
}

export default function PlumbingPage() {
  return <ServicePageLayout data={plumbingData} />;
}
