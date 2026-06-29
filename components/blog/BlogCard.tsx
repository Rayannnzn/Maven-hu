import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md ${featured ? "md:grid md:grid-cols-2" : ""}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${featured ? "aspect-[16/10] md:aspect-auto md:min-h-[320px]" : "aspect-[16/10]"}`}
      >
        <Image
          src={post.featuredImage}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
      </Link>
      <div className={`flex flex-col p-6 ${featured ? "md:justify-center md:p-10" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(post.date)} · {post.readTime} min read
          </span>
        </div>
        <h2
          className={`mb-3 font-bold text-primary group-hover:text-maven-red ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-maven-red hover:underline"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
