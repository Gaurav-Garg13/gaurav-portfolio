import { useState, useEffect } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: "none",
        zIndex: 50, /* above background, below content */
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(179, 138, 90, 0.03), transparent 40%)`
      }}
    />
  );
}
