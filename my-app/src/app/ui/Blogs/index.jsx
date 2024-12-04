"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and its powerful features.",
    date: "March 15, 2024",
    readTime: "5 min read",
    pattern: "radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.15) 0%, transparent 50%), linear-gradient(45deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14"
  },
  {
    id: 2,
    title: "DevOps Best Practices in 2024",
    excerpt: "Explore the latest DevOps practices and tools that are shaping the industry.",
    date: "March 10, 2024",
    readTime: "8 min read",
    pattern: "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), linear-gradient(-45deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
    category: "DevOps",
    slug: "devops-best-practices-2024"
  },
  {
    id: 3,
    title: "Mastering MongoDB Aggregation Pipeline",
    excerpt: "Deep dive into MongoDB's powerful aggregation framework with practical examples.",
    date: "March 5, 2024",
    readTime: "10 min read",
    pattern: "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
    category: "Database",
    slug: "mastering-mongodb-aggregation-pipeline"
  },
  {
    id: 4,
    title: "The Future of AI in Web Development",
    excerpt: "Discover how artificial intelligence is transforming the way we build websites.",
    date: "March 1, 2024",
    readTime: "7 min read",
    pattern: "radial-gradient(circle at 30% 80%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), linear-gradient(225deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
    category: "AI",
    slug: "the-future-of-ai-in-web-development"
  },
  {
    id: 5,
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt: "Learn advanced TypeScript patterns to write more maintainable code.",
    date: "February 28, 2024",
    readTime: "12 min read",
    pattern: "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), linear-gradient(315deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
    category: "TypeScript",
    slug: "mastering-typescript-advanced-patterns"
  },
  {
    id: 6,
    title: "Building Scalable Microservices",
    excerpt: "Best practices for designing and implementing scalable microservices architecture.",
    date: "February 25, 2024",
    readTime: "15 min read",
    pattern: "radial-gradient(circle at 40% 60%, rgba(234, 179, 8, 0.15) 0%, transparent 50%), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)",
    category: "Architecture",
    slug: "building-scalable-microservices"
  }
];

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: post.id * 0.1 }}
        className="group bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
      >
        <div 
          className="relative h-48 w-full overflow-hidden"
          style={{ 
            background: post.pattern,
            backgroundSize: '200% 200%',
          }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <span className="absolute bottom-4 left-4 px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-white/70">{post.excerpt}</p>
          <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
            Read More 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full">
            Blog Posts
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-4">Latest Articles</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my thoughts and insights on web development, DevOps, and technology trends.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Blogs; 