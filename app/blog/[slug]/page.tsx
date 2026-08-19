import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogPostBody from "@/components/blog/BlogPostBody";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { company, containerClass, sectionClass, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// A seoTitle that already carries the brand must opt out of the root layout's
// "%s | Maven Home Services" template; one that doesn't goes through it as usual.
const BRANDED_TITLE = /\|\s*Maven/;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.seoTitle
      ? BRANDED_TITLE.test(post.seoTitle)
        ? { absolute: post.seoTitle }
        : post.seoTitle
      : post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.featuredImage, alt: post.title }],
    },
  };
}

/** Markdown-ish inline syntax has no place in structured data. */
function plainText(text: string) {
  return text.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}

function structuredData(post: BlogPost) {
  const url = `${siteUrl}/blog/${post.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${siteUrl}${post.featuredImage}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": post.author.name === company.name ? "Organization" : "Person",
      name: post.author.name,
      ...(post.author.role ? { jobTitle: post.author.role } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: `${siteUrl}${company.logo}` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const faqs = post.body.flatMap((block) =>
    block.type === "faq" ? block.items : [],
  );

  const graph: Record<string, unknown>[] = [article];
  if (faqs.length > 0) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: plainText(item.question),
        acceptedAnswer: {
          "@type": "Answer",
          text: plainText(item.answer),
        },
      })),
    });
  }

  // `<` is escaped so a stray "</script>" in copy can't break out of the tag.
  return JSON.stringify(graph).replace(/</g, "\\u003c");
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData(post) }}
      />

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
              {post.author.role && (
                <>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">
                    {post.author.role}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className={`${containerClass} relative -mt-4 mb-8 aspect-[21/9] max-w-4xl overflow-hidden rounded-2xl shadow-lg md:-mt-8`}>
          <Image
            src={post.featuredImage}
            alt={post.title}
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
