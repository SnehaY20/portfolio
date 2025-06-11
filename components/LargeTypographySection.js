import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

function LargeTypographySection() {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section className="py-24 px-6 md:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={ref}
          className={`text-6xl md:text-9xl font-bold leading-tight mb-8 transform transition-all duration-1500 ease-out ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            CREATING MAGIC
          </div>
        </h2>
      </div>
    </section>
  );
}

export default LargeTypographySection;
