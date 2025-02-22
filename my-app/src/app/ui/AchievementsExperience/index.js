"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "2nd Prize in Webathon by Siddhartha Academy of Higher Education (Demeed to be Univercity)",
    description: "Participated in Webathon and won 2nd prize for a AI Job Portal",
    year: "2025",
    icon: "🏆"
  },
  {
    title: "2nd Prize in CodeForCause Hackathon by ZeroOne CodeClub",
    description: "Participated in CodeForCause Hackathon and won 2nd prize for a Learning Management System",
    year: "2024",
    icon: "🎯"
  },
];

const experiences = [
  {
    company: "Iskcon Silicon Valley",
    role: "Full Stack Developer - Remote Intern",
    duration: "2025 Feb - Present",
    description: "I would be working on the frontend and backend of the Sankirtan Website and Sankirtan App",
    tech: ["React", "Node.js", "React Native"]
  },
  {
    company: "KLEF-SAC's ZeroOne CodeClub",
    role: "Full Stack Developer & Director of Technical Development",
    duration: "2023 - Present",
    description: "I was the full stack developer and the director of technical development of the club",
    tech: ["Nextjs", "Node js", "MongoDB", "Mysql", "Docker", "Ubuntu"]
  },
];

const CardHoverEffect = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 25%, transparent 100%)`,
      }}
    >
      <div className="relative z-10 p-6 bg-[#ffffff03] backdrop-blur-sm">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff05] to-transparent opacity-50"></div>
    </div>
  );
};

export default function AchievementsExperience() {
  return (
    <section id="achievements-experience" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff05,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff02,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
            Journey & Milestones
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of achievements and professional experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white">Achievements</h3>
              <div className="flex gap-1 mt-4">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {achievement.description}
                      </p>
                      <div className="mt-3 inline-block text-sm text-gray-400">
                        {achievement.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white">Experience</h3>
              <div className="flex gap-1 mt-4">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative pl-6"
                >
                  <div className="absolute left-0 top-[12px] w-2 h-2 rounded-full bg-white/40"></div>
                  <div>
                    <h4 className="text-2xl font-medium text-white mb-1 group-hover:text-white/90 transition-colors">
                      {experience.company}
                    </h4>
                    <p className="text-xl text-white/80 mb-1">{experience.role}</p>
                    <p className="text-sm text-gray-400 mb-3">{experience.duration}</p>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm text-gray-400 bg-white/5 rounded-full
                            group-hover:bg-white/10 group-hover:text-white/70 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 