import React from "react";
import useScrollAnimation from "./scroll-effects/useScrollAnimation";

function Footer() {
  const [ref, isVisible] = useScrollAnimation(0.5);

  return (
    <footer
      ref={ref}
      className={`py-12 px-6 md:px-24 border-t border-gray-700 bg-black text-white transform transition-all duration-1000 ease-out ${
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

export default Footer;
