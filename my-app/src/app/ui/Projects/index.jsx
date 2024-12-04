"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Chitramela - Film Festival Website",
    description: "Designed and developed a comprehensive platform for a film festival, featuring event schedules, ticket booking, and participant management. Implemented scalable architecture using Docker and Nginx.",
    image: "/images/chitramela.png",
    tags: ["Next.js", "MySQL", "Docker", "Nginx", "Ubuntu"],
    github: "github.com/dinexh/Chitramela2k25",
    features: [
      "Online ticket booking system",
      "Real-time event updates",
      "Participant registration portal"
    ],
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Smart Village Revolution",
    description: "Developed a platform for KLEF University's Prinoor program to showcase and manage village development initiatives. Features include progress tracking and resource management.",
    image: "/images/svr.png",
    tags: ["Next.js", "MySQL", "Docker", "Ubuntu"],
    github: "github.com/DeepakReddyG/SmartVillage",
    features: [
      "Initiative tracking dashboard",
      "Resource allocation system",
      "Impact assessment tools"
    ],
    color: "from-green-500 to-blue-500"
  },
  {
    title: "ZeroOne Code Club Portal",
    description: "Built a centralized management system for the ZeroOne Code Club, streamlining event organization, member management, and activity tracking.",
    image: "/images/zerooone_portal.png",
    tags: ["Next.js", "MySQL", "Docker", "Nginx"],
    github: "github.com/dinexh/Cero1PHP",
    features: [
      "Event management system",
      "Member attendance tracking",
      "Resource sharing platform"
    ],
    color: "from-purple-500 to-pink-500"
  }
];

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/images/certs/aws-cert.jpg",
    verificationLink: "#",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    image: "/images/certs/azure-cert.jpg",
    verificationLink: "#",
    color: "from-blue-500 to-green-500"
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "2023",
    image: "/images/certs/gcp-cert.jpg",
    verificationLink: "#",
    color: "from-red-500 to-yellow-500"
  }
];

const Projects = () => {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
              Featured Projects
            </h2>
            <div className="space-y-20">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-br ${project.color} opacity-50" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 text-xl font-medium">{project.title}</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-400">
                              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.date}</p>
                    <a
                      href={cert.verificationLink}
                      className="mt-2 inline-block text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Certificate →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 