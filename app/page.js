"use client";

import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import LargeTypographySection from "../components/LargeTypographySection";
import ServicesSection from "../components/ServicesSection";
import BackgroundSection from "../components/BackgroundSection";
import ClientsSection from "../components/ClientsSection";
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
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <LargeTypographySection />
      <ServicesSection />
      <BackgroundSection />
      <ClientsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
