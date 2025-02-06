import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';

export default function BlogCard({ blog, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-[28rem] rounded-[2rem] p-8 overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-white/5">
        {blog.coverImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col z-[3]">
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
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-light mb-4 text-white group-hover:text-violet-400 transition-colors">
              {blog.title}
            </h2>
            <p className="text-neutral-400 line-clamp-2 group-hover:text-neutral-300 transition-colors">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
} 