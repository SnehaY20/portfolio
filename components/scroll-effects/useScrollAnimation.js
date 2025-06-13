import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    let timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, 50); // 50ms debounce delay
      },
      {
        threshold,
        rootMargin: "0px 0px -5% 0px", // Less aggressive margins
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(timeout);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollAnimation;
