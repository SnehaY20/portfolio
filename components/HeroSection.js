import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

function HeroSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.1);

  return (
    <section className="min-h-screen flex flex-col justify-center px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`transform transition-all duration-800 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="8xl font-bold leading-tight mb-8">
            <div className="mb-2">A Frontend Developer</div>
          </h1>
        </div>

        <div
          ref={subtitleRef}
          className={`transform transition-all duration-800 ease-out ${
            subtitleVisible
              ? "translate-y-0 opacity-100 transition-delay-300"
              : "translate-y-20 opacity-0 transition-delay-0"
          }`}
        >
          <div className="text-3xl font-medium mb-8">
            <div className="mb-2">Lorem ipsum dolor</div>
            <div className="mb-2">Consectetur adipiscing elit</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
