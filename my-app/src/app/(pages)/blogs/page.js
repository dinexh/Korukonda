'use client';

import { useState, useEffect } from 'react';
import { blogs } from '@/app/data/blogs';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiTag, FiClock, FiArrowLeft } from 'react-icons/fi';
import BlogCard from '@/app/components/BlogCard';
import BlogPost from '@/app/components/BlogPost';
import Link from 'next/link';

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  // Get unique categories from blogs, handling undefined categories
  const categories = ['all', ...new Set(blogs.map(blog => blog.category || 'Uncategorized').filter(Boolean))];

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                          (selectedCategory === 'Uncategorized' && !blog.category) ||
                          blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Update how we handle featured and regular blogs
  const featuredBlogs = filteredBlogs.slice(0, 2);
  const regularBlogs = filteredBlogs.slice(2);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

      <div className="relative">
        {selectedBlog ? (
          <BlogPost blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Back to Home Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
              >
                <FiArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            {/* Header with Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                The Blog
              </h1>
              <div className="relative max-w-xl">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-2 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-violet-500 text-white'
                      : 'bg-white/5 text-neutral-400 hover:bg-white/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Featured Posts */}
            {selectedCategory === 'all' && searchQuery === '' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                {featuredBlogs.map((blog, index) => (
                  <div
                    key={blog.id}
                    className="group cursor-pointer relative overflow-hidden rounded-3xl"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm">
                          Featured
                        </span>
                        <span className="text-neutral-300 text-sm flex items-center gap-2">
                          <FiClock className="w-4 h-4" />
                          {blog.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">{blog.title}</h2>
                      <p className="text-neutral-300">{blog.excerpt}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Regular Posts Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {regularBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-sm text-white">
                        {blog.category || 'Uncategorized'}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                        <FiClock className="w-4 h-4" />
                        {blog.readTime}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-neutral-400 line-clamp-2">{blog.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
