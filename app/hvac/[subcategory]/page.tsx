import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { getSubcategoryData, getSubcategorySlugs } from "@/lib/services/subcategories";

type Props = { params: Promise<{ subcategory: string }> };

// Never add "central-air-conditioning-rockville-md" to subcategoryData — it has its
// own static route at app/hvac/central-air-conditioning-rockville-md/, and returning
// a path here that already exists as a static page aborts `next build`.
export async function generateStaticParams() {
  return getSubcategorySlugs("hvac").map((subcategory) => ({ subcategory }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryData("hvac", subcategory);
  if (!data) return {};
  return { title: data.title, description: data.metaDescription };
}

export default async function HvacSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const data = getSubcategoryData("hvac", subcategory);
  if (!data) notFound();
  return <ServicePageLayout data={data} />;
}
