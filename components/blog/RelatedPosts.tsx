import { SectionHeader } from "@/components/shared/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import { containerClass, sectionClass } from "@/lib/site";
import type { BlogPost } from "@/lib/blog";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Keep Reading"
          title="Related Articles"
          subtitle="More tips and guides from the Maven team."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
