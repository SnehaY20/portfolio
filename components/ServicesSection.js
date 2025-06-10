import React from "react";

const services = [
  { id: "I", title: "LOREM IPSUM DOLOR" },
  { id: "II", title: "LOREM IPSUM DOLOR" },
  { id: "III", title: "LOREM IPSUM DOLOR" },
  // { id: "IV", title: "INCIDIDUNT LABORE" },
  // { id: "V", title: "DOLORE MAGNA ALIQUA" },
  // { id: "VI", title: "ENIM AD MINIM" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row gap-12 mb-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <div>About me</div>
              {/* <div>services</div> */}
            </h2>
          </div>

          <div className="lg:w-2/3">
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
        <div className="grid grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-600 p-6">
              <div className="text-sm mb-2">{service.id}.</div>
              <h3 className="text-xl font-medium">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
