"use client";
//  components starts here
import SmoothScroll from "../components/SmoothScroll";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// ui components starts here
import ParticleBackground from "./ui/ParticleBackground/index";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Projects from "./ui/Projects/index";
import Testimonials from "./ui/Testimonials";
import Contact from "./ui/Contact";
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
        <Footer />
      </main>
    </SmoothScroll>
  );
}
