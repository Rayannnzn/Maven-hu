import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { getSubcategoryData, getSubcategorySlugs } from "@/lib/services/subcategories";

type Props = { params: Promise<{ subcategory: string }> };

// Never add "inspections-rockville", "repair-installation-rockville",
// "commercial-residential-rockville", "wiring-rewiring-rockville",
// "outlet-replacement-rockville" or "security-lighting-rockville" to subcategoryData —
// each has its own static route beside this one, and returning a path here that
// already exists as a static page aborts `next build`.
export async function generateStaticParams() {
  return getSubcategorySlugs("electrical").map((subcategory) => ({ subcategory }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryData("electrical", subcategory);
  if (!data) return {};
  return { title: data.title, description: data.metaDescription };
}

export default async function ElectricalSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const data = getSubcategoryData("electrical", subcategory);
  if (!data) notFound();
  return <ServicePageLayout data={data} />;
}
