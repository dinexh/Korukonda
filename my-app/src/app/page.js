"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Interactive Particle Network Background
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.size = Math.random() * 2 + 0.5;
        this.isStar = Math.random() > 0.05; // 5% chance to be a shooting star
      }

      reset() {
        if (this.isStar) {
          // Regular star
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = 0;
          this.vy = 0;
          this.alpha = Math.random() * 0.5 + 0.5;
          this.twinkleSpeed = Math.random() * 0.02;
        } else {
          // Shooting star
          this.x = Math.random() * canvas.width;
          this.y = -10;
          this.vx = (Math.random() - 0.5) * 3;
          this.vy = Math.random() * 5 + 3;
          this.alpha = 1;
          this.trail = [];
        }
      }

      move() {
        if (this.isStar) {
          // Twinkle effect for regular stars
          this.alpha = 0.5 + Math.sin(Date.now() * this.twinkleSpeed) * 0.3;
        } else {
          // Move shooting star
          this.x += this.vx;
          this.y += this.vy;
          
          // Store trail positions
          this.trail.push({ x: this.x, y: this.y });
          if (this.trail.length > 10) this.trail.shift();

          // Reset if out of bounds
          if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
            this.reset();
          }
        }
      }

      draw(ctx) {
        if (this.isStar) {
          // Draw regular star
          ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw shooting star and trail
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = this.size;
          ctx.beginPath();
          for (let i = 0; i < this.trail.length; i++) {
            const opacity = i / this.trail.length;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
            if (i === 0) {
              ctx.moveTo(this.trail[i].x, this.trail[i].y);
            } else {
              ctx.lineTo(this.trail[i].x, this.trail[i].y);
            }
          }
          ctx.stroke();
        }
      }
    }

    // Create more particles for stars
    const particles = Array.from({ length: 200 }, () => new Particle());

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(130, 220, 255, 0.15)';
      ctx.lineWidth = 0.8;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(130, 220, 255, ${opacity * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.move();
        particle.draw(ctx);
      });

      requestAnimationFrame(draw);
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-black"
      style={{ opacity: 1 }}
    />
  );
};

// Add this near the top of your Home component
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dinesh Korukonda",
  "jobTitle": ["Full Stack Developer", "DevOps Engineer"],
  "url": "https://dineshkorukonda.com",
  "description": "Full Stack Developer and DevOps Engineer specializing in modern web applications and cloud solutions.",
  "email": "mailto:dineshkorukonda2027@gmail.com",
  "sameAs": [
    "https://github.com/dinexh",
    "https://www.linkedin.com/in/dinesh-korukonda-513855271/"
  ],
  "skills": [
    "Full Stack Development",
    "DevOps",
    "Cloud Infrastructure",
    "React",
    "Node.js",
    "JavaScript",
    "Docker",
    "Kubernetes"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Interactive Background */}
        <ParticleNetwork />

        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
          <div className="text-center space-y-20">
            {/* Header Section */}
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
                  Coming Soon
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
                Dinesh Korukonda
              </motion.p>
            </motion.div>

            {/* Roles Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
                {["Full Stack Developer", "DevOps Engineer"].map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Message Section */}
            <motion.div
              className="max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white/60 text-lg leading-relaxed">
                Something extraordinary is in development. My portfolio website will be launching soon,
                showcasing my journey through the realms of web development and DevOps engineering.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { href: "https://github.com/dinexh", label: "GitHub" },
                { href: "https://www.linkedin.com/in/dinesh-korukonda-513855271/", label: "LinkedIn" },
                { href: "mailto:dineshkorukonda2027@gmail.com", label: "Email" }
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
