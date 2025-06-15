import React from "react";
import { useScrollAnimation } from "./scroll-effects/useScrollAnimation";
import content from "../data/content.json";

export default function QuickIntroSection() {
  const [labelRef, labelVisible] = useScrollAnimation(0.3);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  const { label, title, description } = content.quickIntro;

  return (
    <section className="py-24 px-6 md:px-24 bg-orange-50 text-black">
      <div className="max-w-7xl mx-auto">
        {/* [QUICK INTRO] label */}
        <div
          ref={labelRef}
          className={`mb-16 transform transition-all duration-800 ease-out ${
            labelVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-sm font-medium tracking-wide text-black">
            {label}
          </div>
        </div>

        {/* Main statement with underlines */}
        <div
          ref={titleRef}
          className={`mb-16 transform transition-all duration-800 ease-out delay-200 ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight space-y-2">
            {title.map((line, index) => (
              <div key={index}>
                {line === "I ENABLE BRANDS, BUSINESSES" && (
                  <span>
                    I ENABLE{" "}
                    <span className="underline decoration-2 underline-offset-8">
                      BRANDS, BUSINESSES
                    </span>
                  </span>
                )}
                {line === "AND ENTREPRENEURS TO TRANSFORM" && (
                  <span>
                    <span className="underline decoration-2 underline-offset-8">
                      AND ENTREPRENEURS
                    </span>{" "}
                    TO TRANSFORM
                  </span>
                )}
                {line === "VISIONS INTO CAPTIVATING" && (
                  <span>
                    <span className="underline decoration-2 underline-offset-8">
                      VISIONS
                    </span>{" "}
                    INTO{" "}
                    <span className="underline decoration-2 underline-offset-8">
                      CAPTIVATING
                    </span>
                  </span>
                )}
                {line === "EXPERIENCES, ALL DESIGNED" && (
                  <span>
                    <span className="underline decoration-2 underline-offset-8">
                      EXPERIENCES
                    </span>
                    , ALL DESIGNED
                  </span>
                )}
                {line === "WITH THE USERS AT THE HELM." && (
                  <span>
                    WITH THE{" "}
                    <span className="underline decoration-2 underline-offset-8">
                      USERS AT THE HELM
                    </span>
                    .
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div
          ref={contentRef}
          className={`max-w-4xl transform transition-all duration-800 ease-out delay-600 ${
            contentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <p className="text-lg leading-relaxed text-black">{description}</p>
        </div>
      </div>
    </section>
  );
}
