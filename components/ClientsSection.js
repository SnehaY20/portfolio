import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

export default function ClientsSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [logosRef, logosVisible] = useScrollAnimation(0.1);

  return (
    <section className="p-6 md:p-24 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div
          ref={titleRef}
          className={`text-center space-y-4 transform transition-all duration-1000 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          {/* <h2 className="text-sm tracking-wider">[SELECTED CLIENTS]</h2> */}
          <div className="text-4xl md:text-5xl font-bold">
            <div>Some of my good projects</div>
            {/* <div>good projects</div> */}
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        {/* Client Logos Grid - Centered */}
        <div ref={logosRef} className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square bg-gray-800 rounded-lg flex items-center justify-center w-24 h-24 transform transition-all duration-1000 ease-out hover:bg-gray-700 hover:scale-110 ${
                  logosVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-xs text-gray-400">LOGO</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
