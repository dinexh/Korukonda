"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/data/projects";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

// Export ProjectCard so it can be used in other components
export const ProjectCard = ({ project, index, onClick, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative bg-gradient-to-b from-[#1a1a1a] to-[#111111] rounded-xl 
        overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 
        transform hover:-translate-y-2 border ${isActive ? 'border-blue-500/50' : 'border-gray-800/50'} 
        flex flex-col cursor-pointer backdrop-blur-sm hover:bg-[#1a1a1a]`}
    >
      <div className="relative h-52">
        <Image 
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-transparent 
          opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 
          transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags?.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm bg-white/5 text-gray-400 rounded-full 
                border border-gray-800/50 group-hover:border-blue-500/20 group-hover:bg-blue-500/5 
                group-hover:text-blue-300 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
          {project.tags?.length > 3 && (
            <span className="px-3 py-1 text-sm text-gray-500 group-hover:text-blue-400/60">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Export ProjectDetailsModal component
export const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto bg-gradient-to-b 
        from-[#1a1a1a] to-[#111111] rounded-xl border border-gray-800/50 
        shadow-2xl backdrop-blur-sm"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white z-10
          bg-black/30 p-2 rounded-full backdrop-blur-sm transition-all duration-200
          hover:bg-black/50 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-64 sm:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <span key={index} className="text-sm text-blue-300/80">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="text-gray-400 leading-relaxed mt-4">
              {project.longDescription}
            </p>
          )}
        </div>

        {project.features && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 rounded-full 
                  border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 
              rounded-lg transition-all duration-200 text-center font-medium
              hover:shadow-lg hover:shadow-blue-500/25 hover:from-blue-500 hover:to-blue-600
              flex items-center justify-center gap-2 group"
          >
            <span>View Live Project</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 px-6 
                rounded-lg transition-all duration-200 text-center font-medium
                border border-white/10 hover:border-white/20 hover:scale-[1.02]
                flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" 
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 0 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              <span>View Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ProjectDetailsPanel component should be identical to ProjectDetailsModal
export const ProjectDetailsPanel = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, width: 0 }}
      animate={{ opacity: 1, x: 0, width: "33.333333%" }}
      exit={{ opacity: 0, x: 20, width: 0 }}
      className="hidden lg:block bg-gradient-to-b from-[#1a1a1a] to-[#111111] rounded-xl 
        border border-gray-800/50 sticky top-24 h-fit backdrop-blur-sm 
        shadow-[0_0_25px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white z-10
          bg-black/30 p-2 rounded-full backdrop-blur-sm transition-all duration-200
          hover:bg-black/50 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative h-64 sm:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <span key={index} className="text-sm text-blue-300/80">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="text-gray-400 leading-relaxed mt-4">
              {project.longDescription}
            </p>
          )}
        </div>

        {project.features && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 rounded-full 
                  border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 
              rounded-lg transition-all duration-200 text-center font-medium
              hover:shadow-lg hover:shadow-blue-500/25 hover:from-blue-500 hover:to-blue-600
              flex items-center justify-center gap-2 group"
          >
            <span>View Live Project</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 px-6 
                rounded-lg transition-all duration-200 text-center font-medium
                border border-white/10 hover:border-white/20 hover:scale-[1.02]
                flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" 
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 0 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              <span>View Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Export ModalWrapper component
export const ModalWrapper = ({ selectedProject, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {selectedProject && (
            <ProjectDetailsModal 
              project={selectedProject} 
              onClose={onClose} 
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Only show first 3 featured projects on homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent opacity-30" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" /> */}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-400 
            bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
              isActive={selectedProject?.title === project.title}
            />
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 
              to-blue-700 text-white rounded-lg transition-all duration-200 
              hover:shadow-lg hover:shadow-blue-500/25 hover:from-blue-500 
              hover:to-blue-600 font-medium group"
          >
            <span>View All Projects</span>
            <svg 
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ModalWrapper 
              selectedProject={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 