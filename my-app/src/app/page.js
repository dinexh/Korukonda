"use client";
//  components starts here

import SmoothScroll from "../components/SmoothScroll";
import ParticleBackground from "../../src/app/ui/ParticleBackground/index";
import Navigation from "../components/Navigation";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Projects from "./ui/Projects";
import Testimonials from "./ui/Testimonials";
import Contact from "./ui/Contact";
import Footer from "../components/Footer";
import GalleryComponent from "./ui/Gallery/index";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-black overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        <Navigation />
        <Hero />
        <About />
        <GalleryComponent />
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
