import Link from "next/link";
import { getRecentPosts } from "@/lib/blog";
import { SectionHeader } from "@/components/shared/PageHero";
import { containerClass, sectionClass } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LatestBlogSection() {
  const posts = getRecentPosts(3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="From the Blog"
          title="Latest Tips & Insights"
          subtitle="Expert advice on maintaining your home systems and saving on energy costs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="gap-0 border py-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col p-6">
                {post.category && (
                  <span className="mb-3 text-xs font-bold uppercase tracking-widest text-maven-red">
                    {post.category}
                  </span>
                )}
                <h3 className="mb-2 text-lg font-bold text-primary">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time dateTime={post.date} className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-maven-red hover:underline"
                  >
                    Read More
                    <span className="material-icons-round text-base">arrow_forward</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="font-bold">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
