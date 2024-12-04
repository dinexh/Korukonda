"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/Dinesh.jpg"
              alt="Dinesh Korukonda"
              fill
              className="object-cover"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-white/70 leading-relaxed">
            Hey there! I'm Dinesh, a passionate Full Stack Developer and DevOps Engineer 
            based in India. I specialize in building robust web applications and 
            implementing efficient cloud solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 py-6">
            {/* <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="text-white/60">Years Experience</p>
            </div> */}
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-400">50+</h3>
              <p className="text-white/60">Projects Completed</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Current Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["javascript", "typescript", "node js", "next js", "Docker", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 rounded-full text-white/70 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 