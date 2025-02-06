"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const GoToBlogs = () => {
    window.location.href = '/blogs';
  };

  const navItems = useMemo(() => [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "contact", label: "Contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems
        .filter(item => !item.href.startsWith('/')) // Only check sections, not external links
        .map(item => item.href);

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust the detection range to be more reliable
          return rect.top <= 150 && rect.bottom >= 0;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for active section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('/')) {
      // For absolute URLs (like /blogs), navigate directly
      window.location.href = href;
      return;
    }

    // Add a small delay to ensure elements are mounted
    setTimeout(() => {
      const element = document.getElementById(href);
      if (element) {
        const navHeight = 80; // Height of your fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add this to close mobile menu when clicking a link
  const handleMobileNavClick = (e, href) => {
    handleNavClick(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-white">👨‍💻</span>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-white/70 hover:text-white transition-colors relative ${
                  activeSection === item.href ? "text-white" : ""
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white p-2" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  // X icon when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md mt-4 rounded-lg">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleMobileNavClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-gray-800 transition-colors ${
                  activeSection === item.href ? "text-white bg-gray-800" : ""
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 