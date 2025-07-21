"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = {
  languages: [
    { name: "TypeScript", type: "let", value: "language.typed", years: 2 },
    { name: "JavaScript", type: "const", value: "language.primary", years: 4 },
    { name: "Elixir", type: "def", value: "language.primary", years: 2 },
    { name: "PHP", type: "let", value: "language.web", years: 2 },
    { name: "Java", type: "let", value: "language.compiled", years: 2 }
  ],
  frameworks: [
    { name: "React.js", type: "const", value: "frontend.primary", years: 4 },
    { name: "Next.js", type: "const", value: "frontend.framework", years: 3 },
    { name: "Node.js", type: "const", value: "backend.runtime", years: 3 },
    { name: "Express", type: "import", value: "backend.framework", years: 3 },
    { name: "Phoneix", type: "import", value: "backend.framework.elixir", years: 2 }
  ],
  databases: [
    { name: "MongoDB", type: "const", value: "database.nosql", years: 3 },
    { name: "MySQL", type: "const", value: "database.sql", years: 3 },
    { name: "Firebase", type: "import", value: "database.realtime", years: 2 },
    { name: "PostgreSQL", type: "const", value: "database.sql", years: 2 }
  ],
  tools: [
    { name: "Docker", type: "const", value: "devops.container", years: 2 },
    { name: "Git", type: "const", value: "version.control", years: 4 },
    { name: "Linux", type: "const", value: "system.os", years: 3 },
    { name: "Nginx", type: "const", value: "server.proxy", years: 2 }
  ]
};

const SkillLine = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="font-mono group relative"
    >
      <div className="flex items-center space-x-2 py-2 px-2 sm:px-4 rounded-md hover:bg-black/40 transition-all text-sm sm:text-base">
        <motion.div 
          initial={{ height: "100%" }}
          animate={{ height: isHovered ? "120%" : "100%" }}
          className="absolute left-0 w-1 bg-white/0 group-hover:bg-white/10 transition-all"
        />
        <span className="text-[#C678DD] min-w-[40px] sm:min-w-[60px]">{skill.type}</span>
        <span className="text-[#E5C07B] min-w-[80px] sm:min-w-[100px]">{skill.name}</span>
        <span className="text-white/50">=</span>
        <span className="text-[#98C379] break-all sm:break-normal">"{skill.value}"</span>
        <span className="text-white/50">;</span>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, items }) => (
  <div className="w-full">
    <h3 className="text-white/50 uppercase text-sm tracking-wider mb-4 pl-4 font-mono">
      {title}
    </h3>
    <div className="space-y-1">
      {items.map((skill, index) => (
        <SkillLine key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </div>
);

const Terminal = () => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5 shadow-2xl"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-black/50 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-lg shadow-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg shadow-yellow-500/20" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-lg shadow-green-500/20" />
          </div>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span className="text-white/50">skills.ts</span>
            <span>-</span>
            <span className="text-white/30">~/portfolio</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-8">
        <div className="text-white/50 mb-6 font-mono text-sm sm:text-base">
          <span className="text-[#C678DD]">interface</span>{" "}
          <span className="text-[#E5C07B]">Developer</span> {"{"}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Frameworks" items={skills.frameworks} />
          <SkillCategory title="Databases" items={skills.databases} />
          <SkillCategory title="Tools" items={skills.tools} />
        </div>

        <div className="text-white/50 font-mono mt-4 text-sm sm:text-base">{"}"}</div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-12 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-bold text-white mb-8 sm:mb-16 text-center"
        >
          Skills
        </motion.h2>

        <Terminal />
      </div>
    </section>
  );
};

export default Skills; 