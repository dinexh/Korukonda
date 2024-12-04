"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
      <div className="text-center space-y-20">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white">
              Dinesh Korukonda
            </h1>
            <motion.div
              className="absolute -inset-2 bg-white/5 blur-xl rounded-full"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
          <motion.p 
            className="text-2xl font-light tracking-[0.2em] text-white/70 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer & DevOps Engineer
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 