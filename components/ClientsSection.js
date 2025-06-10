import React from "react";

export default function ClientsSection() {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm tracking-wider mb-4">[SELECTED CLIENTS]</h2> */}
          <div className="text-4xl md:text-5xl font-bold mb-4">
            <div>Some of my good projects</div>
            {/* <div>good projects</div> */}
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        {/* Client Logos Grid - Placeholder */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
            >
              {/* <div className="text-xs text-gray-400">LOGO</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
