import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';

export default function BlogListItem({ blog, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl p-6 overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-white/5">
        <div className="relative flex items-start gap-8">
          {/* Thumbnail */}
          <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
            {blog.coverImage ? (
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="128px"
              />
            ) : (
              <div className="w-full h-full bg-violet-500/10 flex items-center justify-center">
                <span className="text-4xl font-light text-violet-400">{index + 1}</span>
              </div>
            )}
          </div>
          
          {/* Content */}
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
            <h2 className="text-2xl font-light mb-3 text-white group-hover:text-violet-400 transition-colors">
              {blog.title}
            </h2>
            <p className="text-neutral-400 mb-4 line-clamp-2 group-hover:text-neutral-300 transition-colors">
              {blog.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
} 