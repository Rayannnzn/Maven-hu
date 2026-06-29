import type { BlogBodyBlock } from "@/lib/blog";

export default function BlogPostBody({ body }: { body: BlogBodyBlock[] }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground">
      {body.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{block.content}</p>;
          case "h2":
            return <h2 key={i}>{block.content}</h2>;
          case "ul":
            return (
              <ul key={i}>
                {block.content.map((item) => (
                  <li key={item.slice(0, 30)}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
