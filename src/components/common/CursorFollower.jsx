import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const idleTimeout = useRef(null);

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }

      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "0";
        }
      }, 700); // smooth idle fade
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 14}px, ${pos.current.y - 14}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(idleTimeout.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed top-0 left-0 z-50
        hidden md:block
        opacity-0
        transition-opacity duration-500 ease-out
      "
    >
      <div
        className="
          h-10 w-10 rounded-full
          border border-blue-500/40
          dark:border-purple-400/40
        "
      />
    </div>
  );
}
