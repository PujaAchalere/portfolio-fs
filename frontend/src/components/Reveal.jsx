import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver-driven scroll reveal wrapper.
 * Children fade + slide in when entering the viewport.
 */
export const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
};
