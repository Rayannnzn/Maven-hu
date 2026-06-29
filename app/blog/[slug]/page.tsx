import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogPostBody from "@/components/blog/BlogPostBody";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/ui/badge";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { containerClass, sectionClass } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article>
        <header className={`${sectionClass} bg-muted pb-8 pt-8 md:pb-12`}>
          <div className={`${containerClass} max-w-3xl`}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {formatDate(post.date)} · {post.readTime} min read
              </span>
            </div>
            <h1 className="mb-6 text-3xl font-black tracking-tight text-primary md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="font-semibold text-primary">
                {post.author.name}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{post.author.role}</span>
            </div>
          </div>
        </header>

        <div className={`${containerClass} relative -mt-4 mb-8 aspect-[21/9] max-w-4xl overflow-hidden rounded-2xl shadow-lg md:-mt-8`}>
          <Image
            src={post.featuredImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <section className={`${sectionClass} bg-background pt-0`}>
          <div className={`${containerClass} max-w-3xl`}>
            <BlogPostBody body={post.body} />
          </div>
        </section>
      </article>

      <RelatedPosts posts={related} />
    </>
  );
}
