import React, { useState, useEffect } from "react";
import content from "../data/content.json";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-6 flex justify-between items-center">
          <div className="text-sm font-medium tracking-wide text-white">
            {content.hero.name}
          </div>
          <div className="text-sm font-medium tracking-wide text-white opacity-70">
            © {content.footer.year}
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Pills */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <div className="flex items-center gap-8 text-sm tracking-wider text-white">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-300 transition-colors cursor-pointer font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-gray-300 transition-colors cursor-pointer font-medium"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300 transition-colors cursor-pointer font-medium"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
