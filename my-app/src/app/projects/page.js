"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/data/projects";
import { ProjectCard, ProjectDetailsModal, ModalWrapper } from "@/app/ui/Projects";
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <Link 
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold text-white mb-4">All Projects</h1>
          <p className="text-gray-400 text-lg">
            A comprehensive collection of my work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
              isActive={selectedProject?.title === project.title}
            />
          ))}
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
    </main>
  );
} 