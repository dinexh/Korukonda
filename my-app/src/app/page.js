"use client";
//  components starts here
import SmoothScroll from "./components/SmoothScroll";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// ui components starts here
import Hero from "./ui/Hero";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Projects from "./ui/Projects/index";
import Contact from "./ui/Contact";
import GalleryComponent from "./ui/Gallery/index";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#000000] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        <Navigation />
        <Hero />
        <About />
        <GalleryComponent />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
