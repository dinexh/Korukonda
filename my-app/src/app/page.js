"use client";

import SmoothScroll from "../components/SmoothScroll";
import ParticleBackground from "../../src/app/ui/ParticleBackground/index";
import Navigation from "../components/Navigation";
import Hero from "../../src/app/ui/Hero";
import About from "../../src/app/ui/About";
import Skills from "../../src/app/ui/Skills";
import Projects from "../../src/app/ui/Projects";
import Testimonials from "./ui/Testimonials";
import Contact from "../../src/app/ui/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Interactive Background */}
        <ParticleBackground />

        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Navigation */}
        <Navigation />

        {/* Content Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
