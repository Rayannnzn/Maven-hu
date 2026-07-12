import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { containerClass, sectionClass } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert tips on HVAC, plumbing, electrical, and home maintenance from the Maven Home Services team in Maryland and Virginia.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <PageHero
        eyebrow="Resources"
        title="Home Services Tips & Guides"
        description="Practical advice from experienced HVAC, plumbing, and electrical professionals serving Maryland and Northern Virginia homeowners."
      />

      <section className={`${sectionClass} bg-background`}>
        <div className={containerClass}>
          {featured && (
            <div className="mb-12">
              <BlogCard post={featured} featured />
            </div>
          )}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
