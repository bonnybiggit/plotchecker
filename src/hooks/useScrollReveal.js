import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || motion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    root.querySelectorAll(".step").forEach((step) => observer.observe(step));
    root.classList.add("how--reveal");
    function onMotionChange(event) {
      if (event.matches) {
        root.classList.remove("how--reveal");
        observer.disconnect();
      }
    }
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      root.classList.remove("how--reveal");
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);
  return rootRef;
}
