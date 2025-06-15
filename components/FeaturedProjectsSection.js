import React from "react";
import { useScrollAnimation } from "./scroll-effects/useScrollAnimation";
import content from "../data/content.json";

export default function FeaturedProjectsSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [descRef, descVisible] = useScrollAnimation(0.2);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  const { title, description, items } = content.featuredProjects;

  return (
    <section className="py-24 px-6 md:px-24 bg-orange-50 text-black">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-800 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">{title}</h2>
          <div className="text-sm font-medium tracking-wide text-black">
            © {content.footer.year}
          </div>
        </div>

        <div
          ref={descRef}
          className={`text-center mb-16 transform transition-all duration-800 ease-out delay-200 ${
            descVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            {description}
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((project, index) => (
            <div
              key={project.id}
              className={`group border border-black/20 p-8 hover:border-black hover:scale-105 transition-all duration-500 cursor-pointer ${
                projectsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="text-xs tracking-[0.2em] text-black/60 mb-4">
                {project.id}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-black/80 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-black/60 group-hover:text-black/80 transition-colors font-medium">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
