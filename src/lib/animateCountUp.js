export function animateCountUp(element, { value, prefix = "", suffix = "", duration = 1500 }) {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const format = (number) => `${prefix}${number}${suffix}`;
  let frame;
  let observer;
  let started = false;
  let disposed = false;

  function finish() {
    cancelAnimationFrame(frame);
    observer?.disconnect();
    element.textContent = format(value);
  }

  if (motion.matches || !("IntersectionObserver" in window)) {
    finish();
    return () => {};
  }

  element.textContent = format(0);
  observer = new IntersectionObserver((entries) => {
    if (disposed || started || !entries.some((entry) => entry.isIntersecting)) return;
    started = true;
    observer.disconnect();
    let start;
    function tick(timestamp) {
      if (disposed) return;
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      element.textContent = format(progress === 1 ? value : Math.floor(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  }, { threshold: 0.25 });
  observer.observe(element);

  function onMotionChange(event) {
    if (event.matches) {
      started = true;
      finish();
    }
  }
  motion.addEventListener("change", onMotionChange);
  return () => {
    disposed = true;
    finish();
    motion.removeEventListener("change", onMotionChange);
  };
}
