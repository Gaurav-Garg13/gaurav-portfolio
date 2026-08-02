import { motion } from "framer-motion";

export default function StickyNote({ note, style = {} }) {
  // A subtle rotation based on the ID to make them look naturally placed
  const hash = note.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const rotation = (hash % 10) - 5; // -5 to +5 degrees

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "absolute",
        width: "240px",
        padding: "1.5rem",
        background: "#F5F3EE",
        color: "#141210",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5), inset 0 0 40px rgba(0,0,0,0.02)",
        transform: `rotate(${rotation}deg)`,
        zIndex: 5,
        ...style
      }}
      className="hidden xl:block" // only show on wide screens where margins exist
    >
      {/* Tape piece at the top */}
      <div 
        style={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%) rotate(-2deg)",
          width: "60px",
          height: "20px",
          background: "rgba(255,255,255,0.4)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(0,0,0,0.05)"
        }}
      />
      
      {/* Paper texture overlay */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          pointerEvents: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")"
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "0.25rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "rgba(0,0,0,0.5)", textTransform: "uppercase" }}>{note.category}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "rgba(0,0,0,0.5)" }}>{note.date}</span>
        </div>
        
        <p className="t-hand" style={{ fontSize: "1.25rem", lineHeight: 1.3, marginBottom: "1rem" }}>
          {note.text}
        </p>
        
        <div style={{ textAlign: "right" }}>
          <span className="t-hand" style={{ fontSize: "1rem", color: "rgba(0,0,0,0.4)" }}>— {note.signature}</span>
        </div>
      </div>
    </motion.div>
  );
}
