"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at TechCorp",
    image: "/images/testimonials/john.jpg",
    content: "Dinesh is an exceptional developer who consistently delivers high-quality work. His expertise in both frontend and backend development made him an invaluable asset to our team.",
  },
  {
    name: "Sarah Smith",
    role: "Lead Developer at WebSolutions",
    image: "/images/testimonials/sarah.jpg",
    content: "Working with Dinesh was a great experience. His knowledge of DevOps practices and ability to implement efficient solutions helped streamline our development process.",
  },
  {
    name: "Mike Johnson",
    role: "CTO at StartupX",
    image: "/images/testimonials/mike.jpg",
    content: "Dinesh's attention to detail and problem-solving skills are impressive. He not only writes clean code but also thinks about scalability and maintainability.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide cursor-grab pb-8"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[350px] md:min-w-[400px] bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.src = '/images/avatar-placeholder.jpg'
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-white/70 italic flex-grow">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-6 flex justify-center">
                <svg className="w-8 h-8 text-blue-400/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-400 w-4' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 