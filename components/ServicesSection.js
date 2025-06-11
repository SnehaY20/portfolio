import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

function ServicesSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const services = [
    { id: "I", title: "LOREM IPSUM DOLOR" },
    { id: "II", title: "LOREM IPSUM DOLOR" },
    { id: "III", title: "LOREM IPSUM DOLOR" },
    // { id: "IV", title: "INCIDIDUNT LABORE" },
    // { id: "V", title: "DOLORE MAGNA ALIQUA" },
    // { id: "VI", title: "ENIM AD MINIM" },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div
            ref={titleRef}
            className={`lg:w-1/3 transform transition-all duration-1000 ease-out ${
              titleVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <div>About me</div>
              {/* <div>services</div> */}
            </h2>
          </div>

          <div
            ref={contentRef}
            className={`lg:w-2/3 transform transition-all duration-1000 ease-out delay-200 ${
              contentVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <p className="text-xl font-medium mb-6">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Consectetur adipiscing elit sed do eiusmod tempor:
            </p>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`border border-gray-600 p-6 transform transition-all duration-1000 ease-out hover:border-white hover:scale-105 ${
                cardsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-sm mb-2">{service.id}.</div>
              <h3 className="text-xl font-medium">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
