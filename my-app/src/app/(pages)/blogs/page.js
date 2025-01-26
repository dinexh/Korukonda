'use client';

import { useState, useEffect } from 'react';
import { blogs } from '@/app/data/blogs';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiClock, FiMaximize2, FiGrid } from 'react-icons/fi';
import Image from 'next/image';

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [layout, setLayout] = useState('grid'); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const GridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogs.map((blog, index) => (
        <motion.article
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => setSelectedBlog(blog)}
          className="group cursor-pointer"
        >
          <div className="relative h-[28rem] rounded-[2rem] p-8 overflow-hidden">
            {/* Cover Image */}
            {blog.coverImage && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            
            {/* Background with noise texture */}
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-60 z-[1]" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 z-[2]" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[3]" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col z-[4]">
              <div className="flex items-center justify-between text-sm text-neutral-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-violet-500" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock className="text-violet-500" />
                    {blog.readTime}
                  </span>
                </div>
                <FiArrowRight className="text-violet-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              <div className="mt-auto">
                <div className="flex gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-light mb-4 text-white group-hover:text-violet-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-neutral-400 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-6">
      {blogs.map((blog, index) => (
        <motion.article
          key={blog.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => setSelectedBlog(blog)}
          className="group cursor-pointer"
        >
          <div className="relative rounded-2xl p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
            <div className="relative flex items-start gap-8">
              <div className="w-24 h-24 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-light text-violet-400">{index + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-2">
                      <FiCalendar className="text-violet-500" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FiClock className="text-violet-500" />
                      {blog.readTime}
                    </span>
                  </div>
                  <FiArrowRight className="text-violet-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h2 className="text-2xl font-light mb-2 text-white group-hover:text-violet-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-neutral-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );

  const BlogPost = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/20 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={() => setSelectedBlog(null)}
            className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to articles</span>
          </button>
        </nav>
      </header>

      <article className="max-w-4xl mx-auto px-8 py-16">
        {/* Cover Image */}
        {selectedBlog.coverImage && (
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={selectedBlog.coverImage}
              alt={selectedBlog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
            <span className="flex items-center gap-2">
              <FiCalendar className="text-violet-500" />
              {selectedBlog.date}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="text-violet-500" />
              {selectedBlog.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            {selectedBlog.title}
          </h1>
          <div className="flex gap-2">
            {selectedBlog.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 text-sm rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {selectedBlog.content.split('\n\n').map((section, index) => {
            if (section.trim().startsWith('![')) {
              const imageMatch = section.match(/!\[(.*?)\]\((.*?)\)/);
              if (imageMatch) {
                const [, alt, src] = imageMatch;
                return (
                  <div key={index} className="my-12">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                        unoptimized={true}
                        loading="eager"
                        onError={(e) => {
                          console.error('Image failed to load:', src);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                );
              }
            }

            if (section.trim().match(/^\d+\./)) {
              const [number, ...textParts] = section.trim().split('.');
              const title = textParts.join('.').trim();
              return (
                <div key={index} className="my-12">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-light text-violet-400">{number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-4">{title}</h3>
                      <div className="text-neutral-300">
                        {section.split('\n').slice(1).join('\n')}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <p key={index} className="text-neutral-300 leading-relaxed">
                {section}
              </p>
            );
          })}
        </div>
      </article>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Noise texture */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
      
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

      <div className="relative">
        {selectedBlog ? (
          <BlogPost />
        ) : (
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="flex items-center justify-between mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-light mb-4">
                  Latest Articles
                </h1>
                <p className="text-neutral-400">
                  Exploring the frontiers of technology and development
                </p>
              </motion.div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLayout('grid')}
                  className={`p-2 rounded-lg transition-colors ${layout === 'grid' ? 'text-violet-400 bg-violet-500/10' : 'text-neutral-400 hover:text-white'}`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setLayout('list')}
                  className={`p-2 rounded-lg transition-colors ${layout === 'list' ? 'text-violet-400 bg-violet-500/10' : 'text-neutral-400 hover:text-white'}`}
                >
                  <FiMaximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {layout === 'grid' ? <GridLayout /> : <ListView />}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
