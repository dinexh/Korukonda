"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0f172a,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1e1b4b,transparent_50%)]" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-16"
          >
            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
                  Coming Soon
                </span>
              </motion.h1>
              <motion.h2 
                className="text-xl md:text-2xl text-blue-400 font-light tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Dinesh Korukonda
              </motion.h2>
              <motion.div 
                className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 160, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                { icon: CodeBracketIcon, label: "Full Stack Developer" },
                // { icon: DevicePhoneMobileIcon, label: "Mobile App Developer" },
                { icon: CommandLineIcon, label: "DevOps Engineer" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-20 
                                group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative flex items-center space-x-4 bg-black px-6 py-4 rounded-lg border border-blue-500/20">
                    <item.icon className="h-6 w-6 text-blue-400" />
                    <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Coming Soon Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-10"></div>
              <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                <p className="text-zinc-400 leading-relaxed">
                  Something extraordinary is in development. My portfolio website will be launching soon,
                  showcasing my journey in web development, mobile applications, and DevOps engineering.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex justify-center space-x-6"
            >
              {[
                { href: "https://github.com/dinexh", label: "GitHub" },
                { href: "https://www.linkedin.com/in/dinesh-korukonda-513855271/", label: "LinkedIn" },
                { href: "mailto:dineshkorukonda2027@gmail.com", label: "Email" }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-6 py-2 rounded-full text-blue-400 border border-blue-500/20 
                           hover:bg-blue-500/10 transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-4 text-zinc-600 text-sm"
        >
          Crafted with Next.js
        </motion.div>
      </div>
    </div>
  );
}
