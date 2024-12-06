"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "../../data/blogs";

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