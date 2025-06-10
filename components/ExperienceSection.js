import React from "react";

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

export default function ExperienceSection() {
  return (
    <section className="py-24 px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm tracking-wider mb-4">[Work experience]</h2> */}
          <div className="text-4xl md:text-5xl font-bold">
            <div>Work experience</div>
           
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center border-b border-gray-700 pb-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                <p className="text-lg">{exp.role}</p>
              </div>
              <div className="text-right">
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
