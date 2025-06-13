"use client";

import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (
  threshold = 0.1
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Navigation with translucent/opaque box at bottom
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl transition-all duration-300 ${
          scrolled ? "bg-white/20" : ""
        }`}
      >
        <div className="flex items-center gap-8 text-sm tracking-wider text-white">
          <div
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            ABOUT
          </div>
          <div
            onClick={() => scrollToSection("work")}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            WORK
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            CONTACT
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`transform transition-all duration-800 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-8xl font-bold leading-tight mb-8">
            A Frontend Developer
          </h1>
        </div>

        <div
          ref={subtitleRef}
          className={`transform transition-all duration-800 ease-out ${
            subtitleVisible
              ? "translate-y-0 opacity-100 transition-delay-300"
              : "translate-y-20 opacity-0 transition-delay-0"
          }`}
        >
          <div className="text-3xl font-medium mb-8">
            <div className="mb-2">Lorem ipsum dolor</div>
            <div className="mb-2">Consectetur adipiscing elit</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundSection() {
  const [leftRef, leftVisible] = useScrollAnimation(0.2);
  const [rightRef, rightVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row gap-12">
          <div
            ref={leftRef}
            className={`md:w-1/3 transform transition-all duration-800 ease-out ${
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
            className={`w-2/3 transform transition-all duration-800 ease-out ${
              rightVisible
                ? "translate-x-0 opacity-100 transition-delay-300"
                : "translate-x-20 opacity-0 transition-delay-0"
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

function ServicesSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const services = [
    { id: "I", title: "LOREM IPSUM DOLOR" },
    { id: "II", title: "LOREM IPSUM DOLOR" },
    { id: "III", title: "LOREM IPSUM DOLOR" },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div
            ref={titleRef}
            className={`lg:w-1/3 transform transition-all duration-800 ease-out ${
              titleVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About me</h2>
          </div>

          <div
            ref={contentRef}
            className={`lg:w-2/3 transform transition-all duration-800 ease-out ${
              contentVisible
                ? "translate-x-0 opacity-100 transition-delay-200"
                : "translate-x-20 opacity-0 transition-delay-0"
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

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`border border-gray-600 p-6 transform transition-all duration-800 ease-out hover:border-white hover:scale-105 group ${
                cardsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: cardsVisible
                  ? `${index * 150}ms`
                  : `${(2 - index) * 150}ms`,
              }}
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

function ClientsSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [logosRef, logosVisible] = useScrollAnimation(0.1);

  return (
    <section id="work" className="p-24 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div
          ref={titleRef}
          className={`text-center space-y-4 transform transition-all duration-800 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-5xl font-bold">Some of my good projects</div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <div ref={logosRef} className="flex justify-center">
          <div className="grid grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square bg-gray-800 rounded-lg flex items-center justify-center w-24 h-24 transform transition-all duration-800 ease-out hover:bg-gray-700 hover:scale-110 group ${
                  logosVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: logosVisible
                    ? `${i * 100}ms`
                    : `${(4 - i) * 100}ms`,
                }}
              >
                <div className="w-4 h-0.5 bg-gray-400 group-hover:bg-white transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
  ];

  return (
    <section id="experience" className="py-24 px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-800 ease-out ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-4xl md:text-5xl font-bold">Work experience</div>
        </div>

        <div ref={itemsRef} className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-row justify-between items-center border-b border-gray-700 pb-6 transform transition-all duration-800 ease-out ${
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

function LargeTypographySection() {
  const [ref, isVisible] = useScrollAnimation(0.3);

  return (
    <section id="contact" className="py-24 px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={ref}
          className={`text-9xl font-bold leading-tight mb-8 transform transition-all duration-1200 ease-out ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            CREATING MAGIC
          </div>
        </h2>
      </div>
    </section>
  );
}

function Footer() {
  const [ref, isVisible] = useScrollAnimation(0.5);

  return (
    <footer
      ref={ref}
      className={`py-12 px-24 border-t border-gray-700 bg-black text-white transform transition-all duration-800 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">Sneha Yadav</div>
        <div className="text-sm">© 2025</div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <HeroSection />
      <BackgroundSection />
      <ServicesSection />
      <ClientsSection />
      <ExperienceSection />
      <LargeTypographySection />
      <Footer />
    </div>
  );
}
