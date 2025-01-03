"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const skills = {
  "Frontend Development": {
    icon: "💻",
    description: "Building beautiful, responsive user interfaces",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Javascript", level: 90 },
      { name: "HTML/CSS", level: 100 },
    ]
  },
  "Backend Development": {
    icon: "⚙️",
    description: "Creating robust server-side applications",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ]
  },
  "DevOps & Tools": {
    icon: "🛠",
    description: "Streamlining development and deployment",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 90 },
      { name: "Nginx", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Kubernetics", level: 2 },
    ]
  }
};

const SkillCard = ({ name, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all border border-white/10"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-medium">{name}</h4>
        <span className="text-white/60 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${
            level >= 90 ? "bg-purple-500" :
            level >= 80 ? "bg-blue-500" :
            level >= 70 ? "bg-green-500" :
            "bg-yellow-500"
          }`}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, description, skills }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.07] transition-all border border-white/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <p className="text-white/60 text-sm mb-6">{description}</p>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
};

export default Skills; 