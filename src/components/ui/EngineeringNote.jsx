import { motion } from "framer-motion";

export default function EngineeringNote({ text, top, left, right, bottom, rotation = -3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        position: "absolute",
        top, left, right, bottom,
        pointerEvents: "none",
        zIndex: 10,
        width: "max-content",
        maxWidth: "200px"
      }}
      className="hidden xl:block" /* Only show on very large screens with wide margins */
    >
      <div 
        style={{ 
          transform: `rotate(${rotation}deg)`,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}
      >
        <div style={{ height: "1px", width: "30px", backgroundColor: "var(--accent)", opacity: 0.3 }} />
        <p className="t-hand">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
