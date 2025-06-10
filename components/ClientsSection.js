import React from "react";

export default function ClientsSection() {
  return (
    <section className="p-24">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          {/* <h2 className="text-sm tracking-wider">[SELECTED CLIENTS]</h2> */}
          <div className="text-5xl font-bold">
            <div>Some of my good projects</div>
            {/* <div>good projects</div> */}
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        {/* Client Logos Grid - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center w-24 h-24"
              >
                {/* <div className="text-xs text-gray-400">LOGO</div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}