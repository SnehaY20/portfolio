import { useEffect, useState } from "react";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : ""
      }`}
    >
      <div className="text-sm tracking-wider">ABOUT</div>
      <div className="text-sm tracking-wider">© 2025</div>
    </nav>
  );
}

export default Navigation;
