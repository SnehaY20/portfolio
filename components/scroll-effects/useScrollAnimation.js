import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create intersection observer with rootMargin to trigger at custom threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate once and only when intersecting
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            // Optionally unobserve after animation to prevent re-triggering
            observer.unobserve(element);
          }
        });
      },
      {
        // Convert threshold to rootMargin
        // threshold 0.2 means trigger when element is 20% into viewport
        // So rootMargin should be negative to achieve this
        rootMargin: `0px 0px -${(1 - threshold) * 100}% 0px`,
        threshold: 0.01, // Very small threshold to detect entry
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollAnimation;
