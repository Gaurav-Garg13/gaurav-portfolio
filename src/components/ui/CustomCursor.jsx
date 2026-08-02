import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState(null);
  const [isIdle, setIsIdle] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Critical damping: no bounce, precise tracking
  const springConfig = { stiffness: 800, damping: 50, mass: 0.5 };
  
  const mouseX = useSpring(-100, springConfig);
  const mouseY = useSpring(-100, springConfig);

  useEffect(() => {
    let idleTimer;
    let scrollTimer;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      setIsIdle(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsIdle(true), 2000);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor-type]");
      if (target) {
        if (target.hasAttribute("data-cursor-type")) {
          setHoverType(target.getAttribute("data-cursor-type"));
        } else if (target.tagName.toLowerCase() === "button") {
          setHoverType("button");
        } else if (target.tagName.toLowerCase() === "a") {
          setHoverType("link");
        }
      } else {
        setHoverType(null);
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimer);
      clearTimeout(scrollTimer);
    };
  }, [mouseX, mouseY]);

  // Determine styles based on state
  let ringSize = 24;
  let glowSize = 80;
  let glowOpacity = 0.05;

  if (isScrolling) {
    // Stable during scroll
    ringSize = 24;
    glowSize = 80;
    glowOpacity = 0.03;
  } else if (hoverType === "button") {
    ringSize = 28; // ~15% larger
    glowSize = 100;
    glowOpacity = 0.08;
  } else if (hoverType === "link") {
    ringSize = 18; // Contract slightly
    glowSize = 60;
    glowOpacity = 0.1;
  } else if (hoverType === "project") {
    ringSize = 24;
    glowSize = 250; // Faint radial illumination
    glowOpacity = 0.03;
  } else if (isIdle) {
    glowSize = 40;
    glowOpacity = 0.02;
  }

  return (
    <>
      {/* Layer 3: Soft Glow */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: glowSize,
          height: glowSize,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9997,
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
        animate={{
          width: glowSize,
          height: glowSize,
          opacity: glowOpacity,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Layer 2: Thin Ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9998,
          border: "1px solid var(--accent)",
          borderRadius: "50%",
          opacity: 0.3,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Layer 1: Center Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          background: "var(--accent)",
          borderRadius: "50%",
        }}
      />
    </>
  );
}
