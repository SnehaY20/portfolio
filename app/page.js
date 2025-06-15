"use client";

import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import QuickIntroSection from "../components/QuickIntroSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling
    const handleSmoothScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="bg-orange-50 text-black">
      <Navigation />
      <HeroSection />
      <QuickIntroSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
