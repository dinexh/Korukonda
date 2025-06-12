"use client";

import { motion } from "framer-motion";

const About = () => {
  const DownloadResume = () => {
    window.open("/dineshkorukonda.pdf", "_blank");
  };

  const skills = [
    "JavaScript", "TypeScript", "Python", "PHP", "Ngnix","Ubuntu", "React", "Next.js", 
    "Node.js", "Docker", "AWS", "MongoDB" , "Gemini API" 
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#ffffff05_49%,#ffffff05_51%,transparent_52%)] bg-[length:20px_20px]" /> */}

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left Column - Large Text */}
          <motion.div 
            className="md:col-span-5 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <h2 className="text-[8rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/80">
                About
              </h2>
              <div className="mt-8 space-y-4">
                <motion.div 
                  className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                />
                <p className="text-lg text-white/60">Full Stack Developer</p>
                <p className="text-lg text-white/60">DevOps Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="md:col-span-7 space-y-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Bio */}
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-white/80">
                Hey there! I&apos;m Dinesh Korukonda, crafting digital experiences from India. 
                With a minimalist approach to problem-solving, I create clean, 
                efficient, and scalable solutions.
              </p>
              <p className="text-xl leading-relaxed text-white/80">
                My expertise spans across modern web technologies and cloud infrastructure,
                enabling me to build end-to-end solutions that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 border border-white/10 backdrop-blur-sm">
                  <p className="text-5xl font-light">10+</p>
                  <p className="mt-2 text-sm text-white/60 uppercase tracking-wider">Projects</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 border border-white/10 backdrop-blur-sm">
                  <p className="text-5xl font-light">95%</p>
                  <p className="mt-2 text-sm text-white/60 uppercase tracking-wider">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-wider text-white/40">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm text-sm hover:bg-white/10 
                             transition-colors border border-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <motion.button
              onClick={DownloadResume}
              className="group relative px-6 py-3 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative flex items-center space-x-2">
                <span className="text-sm uppercase tracking-wider">Download Resume</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 