import React from "react";
import { useScrollAnimation } from "./scroll-effects/useScrollAnimation";
import content from "../data/content.json";

export default function HeroSection() {
  const [statusRef, statusVisible] = useScrollAnimation(0.1);
  const [nameRef, nameVisible] = useScrollAnimation(0.1);
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [currentRef, currentVisible] = useScrollAnimation(0.1);

  const { name, title, subtitle, status } = content.hero;

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-orange-50 text-black relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Available for opportunities */}
        <div
          ref={statusRef}
          className={`absolute top-20 left-6 md:left-24 transform transition-all duration-800 ease-out ${
            statusVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-sm font-medium text-black">{status}</div>
        </div>

        {/* Large Name */}
        <div
          ref={nameRef}
          className={`mb-8 transform transition-all duration-1000 ease-out ${
            nameVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
            {name.split(" ")[0]}
          </div>
          <div className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
            {name.split(" ")[1]}
          </div>
        </div>

        {/* Title */}
        <div
          ref={titleRef}
          className={`mb-12 transform transition-all duration-1000 ease-out delay-200 ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
            {title.split(" ")[0]}
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
            {title.split(" ")[1]}
          </div>
        </div>

        {/* Current Position */}
        <div
          ref={currentRef}
          className={`transform transition-all duration-1000 ease-out delay-400 ${
            currentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-sm font-medium tracking-wide text-black">
            {subtitle}
          </div>
        </div>
      </div>
    </section>
  );
}
