import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import BackgroundSection from "../components/BackgroundSection";
import LargeTypographySection from "../components/LargeTypographySection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />
      <HeroSection />
      <BackgroundSection />
      <LargeTypographySection />
      <ServicesSection />
      <ClientsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
