"use client";
import { motion } from "framer-motion";

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
    company: "GeekBull",
    role: "Software Engineer Intern",
    duration: "2025 June - Present",
    description: "Working as a Software Engineer Intern at GeekBull, focusing on full-stack development and contributing to various projects including intenal tools.",
    tech: ["Elixir", "Phoenix", "Triplex" , "Redis"]
  },
  {
    company: "KLEF-SAC's ZeroOne CodeClub",
    role: "Full Stack Developer & Director of Technical Development",
    duration: "2023 - Present",
    description: "I was the full stack developer and the director of technical development of the club",
    tech: ["Nextjs", "Node js", "MongoDB", "Mysql", "Docker", "Ubuntu"]
  },

];

export default function AchievementsExperience() {
  return (
    <section id="achievements-experience" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff05,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
            Journey & Milestones
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold text-white">Achievements</h3>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] rounded-xl p-6 transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/5 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                    <div className="relative text-6xl transform-gpu group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-white/90 mb-3">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 mb-3">
                      {achievement.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-white/40">
                      <span className="w-4 h-px bg-white/20"></span>
                      {achievement.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold text-white">Experience</h3>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] rounded-xl p-6 transition-colors duration-300"
              >
                <div className="space-y-3">
                  <h4 className="text-2xl font-medium text-white/90">
                    {experience.company}
                  </h4>
                  <p className="text-xl text-white/70">
                    {experience.role}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-white/40">
                    <span className="w-4 h-px bg-white/20"></span>
                    {experience.duration}
                  </div>
                  <p className="text-gray-400 mt-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {experience.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-1.5 text-sm text-white/60 bg-white/5 rounded-full
                          hover:bg-white/10 hover:text-white/80 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 