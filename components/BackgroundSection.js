import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

function BackgroundSection() {
  const [leftRef, leftVisible] = useScrollAnimation(0.2);
  const [rightRef, rightVisible] = useScrollAnimation(0.2);

  return (
    <section className="py-24 px-6 md:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div
            ref={leftRef}
            className={`md:w-1/3 transform transition-all duration-1000 ease-out ${
              leftVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-sm tracking-wider mb-2">[BACKGROUND]</h2>
            <div className="text-sm tracking-wider mb-2">
              2025 • Lorem Ipsum
            </div>
          </div>

          <div
            ref={rightRef}
            className={`md:w-2/3 transform transition-all duration-1000 ease-out delay-300 ${
              rightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p className="text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackgroundSection;
