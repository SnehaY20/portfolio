import React from "react";
import { useScrollAnimation } from "./scroll-effects/useScrollAnimation";
import content from "../data/content.json";

export default function ExperienceSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [itemsRef, itemsVisible] = useScrollAnimation(0.2);

  const { title, items } = content.experience;

  return (
    <section className="pt-24 px-6 md:px-24 bg-orange-50 text-black">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-700 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-4xl md:text-5xl font-black">{title}</div>
        </div>

        <div ref={itemsRef} className="space-y-12">
          {items.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-row justify-between items-center border-b border-black/20 pb-6 transform transition-all duration-700 ease-out ${
                itemsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div>
                <h3 className="text-2xl font-black mb-2">{exp.company}</h3>
                <p className="text-lg font-medium">{exp.role}</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="text-sm font-medium">{exp.period}</div>
                <div className="text-sm font-medium">{exp.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
