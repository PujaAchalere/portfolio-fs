import { useEffect, useRef } from "react";

/**
 * Custom orange cursor — small dot + lagging ring.
 * Disabled on touch / small screens via CSS.
 */
export const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const handleOver = (e) => {
      const t = e.target;
      if (
        t.closest("a, button, [role=button], .lift, input, textarea, select, .cursor-hover")
      ) {
        ringRef.current?.classList.add("hover");
      }
    };
    const handleOut = (e) => {
      const t = e.target;
      if (
        t.closest("a, button, [role=button], .lift, input, textarea, select, .cursor-hover")
      ) {
        ringRef.current?.classList.remove("hover");
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" data-testid="custom-cursor-ring" />
      <div ref={dotRef} className="cursor-dot" data-testid="custom-cursor-dot" />
    </>
  );
};
