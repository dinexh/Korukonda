import { notFound } from "next/navigation";
import { blogPosts } from "@/app/ui/Blogs";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div 
          className="h-64 w-full rounded-xl overflow-hidden"
          style={{ 
            background: post.pattern,
            backgroundSize: '200% 200%',
          }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 text-lg">{post.excerpt}</p>
          {/* Add more content here */}
        </div>
      </div>
    </article>
  );
} 