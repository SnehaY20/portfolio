import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

function ExperienceSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [itemsRef, itemsVisible] = useScrollAnimation(0.1);

  const experiences = [
    {
      company: "Lorem Ipsum",
      role: "LOREM IPSUM",
      period: "2025 - NOW",
      location: "",
    },
    // {
    //   company: "Dolor Sit Amet Inc.",
    //   role: "CONSECTETUR ADIPISCING MANAGER",
    //   period: "2021 - 2024",
    //   location: "ELIT TOWN",
    // },
    // {
    //   company: "Sed Do Studio",
    //   role: "FREELANCE EIUSMOD DESIGNER",
    //   period: "2020 - 2021",
    //   location: "TEMPOR / INCIDIDUNT",
    // },
    // {
    //   company: "Ut Labore Agency",
    //   role: "DOLORE MAGNA INTERN",
    //   period: "2018 - 2019",
    //   location: "ALIQUA CITY",
    // },
  ];

  return (
    <section className="py-24 px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-800 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-4xl md:text-5xl font-bold">
            <div>Work experience</div>
          </div>
        </div>

        <div ref={itemsRef} className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex lex-row justify-between items-center border-b border-gray-700 pb-6 transform transition-all duration-800 ease-out ${
                itemsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: itemsVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                <p className="text-lg">{exp.role}</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="text-sm">{exp.period}</div>
                <div className="text-sm">{exp.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
