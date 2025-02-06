import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import Image from 'next/image';

export default function BlogPost({ blog, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/20 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={onBack}
            className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to articles</span>
          </button>
        </nav>
      </header>

      <article className="max-w-4xl mx-auto px-8 py-16">
        {blog.coverImage && (
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        <BlogHeader blog={blog} />
        <BlogContent content={blog.content} />
      </article>
    </motion.div>
  );
}

function BlogHeader({ blog }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
        <span className="flex items-center gap-2">
          <FiCalendar className="text-violet-500" />
          {blog.date}
        </span>
        <span className="flex items-center gap-2">
          <FiClock className="text-violet-500" />
          {blog.readTime}
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
        {blog.title}
      </h1>
      <div className="flex gap-2">
        {blog.tags.map(tag => (
          <span key={tag} className="px-4 py-1.5 text-sm rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function BlogContent({ content }) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {content.split('\n\n').map((section, index) => {
        if (section.trim().startsWith('![')) {
          const imageMatch = section.match(/!\[(.*?)\]\((.*?)\)/);
          if (imageMatch) {
            const [, alt, src] = imageMatch;
            return <BlogImage key={index} src={src} alt={alt} />;
          }
        }

        if (section.trim().match(/^\d+\./)) {
          return <NumberedSection key={index} section={section} />;
        }

        return (
          <p key={index} className="text-neutral-300 leading-relaxed">
            {section}
          </p>
        );
      })}
    </div>
  );
}

function BlogImage({ src, alt }) {
  return (
    <div className="my-12">
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

function NumberedSection({ section }) {
  const [number, ...textParts] = section.trim().split('.');
  const title = textParts.join('.').trim();
  
  return (
    <div className="my-12">
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