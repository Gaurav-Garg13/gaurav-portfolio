import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TOOLBOX } from "../../lib/constants";
import Reveal from "../shared/SectionTransition";
import EngineeringNote from "../ui/EngineeringNote";

function SkillBox({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="premium-panel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.5rem",
        aspectRatio: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "4px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ width: 4, height: 4, background: hovered ? "var(--accent)" : "var(--border-strong)", transition: "background 0.3s" }} />
        <span className="t-mono" style={{ fontSize: "10px", color: "var(--text-3)" }}>
          {hovered ? "ACTIVE" : "IDLE"}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.div
            key="title"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.25rem", color: "var(--text-1)" }}>
              {item.name}
            </h4>
          </motion.div>
        ) : (
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="t-mono" style={{ fontSize: "10px", color: "var(--text-3)" }}>EXP</span>
              <span className="t-mono" style={{ fontSize: "10px", color: "var(--accent)" }}>{item.years} YRS</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="t-mono" style={{ fontSize: "10px", color: "var(--text-3)" }}>PRJ</span>
              <span className="t-mono" style={{ fontSize: "10px", color: "var(--text-1)" }}>{item.projects} SHIPPED</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="t-mono" style={{ fontSize: "10px", color: "var(--text-3)" }}>CFD</span>
              <span className="t-mono" style={{ fontSize: "10px", color: "var(--success)" }}>{item.confidence}%</span>
            </div>
            <div style={{ marginTop: "0.5rem", borderTop: "1px solid var(--border)", paddingTop: "0.5rem" }}>
              <span className="t-mono" style={{ fontSize: "9px", color: "var(--text-2)", display: "block", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                // {item.usedIn}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-blueprint" style={{ position: "relative" }}>
      <EngineeringNote 
        text="Hover reveals telemetry data."
        bottom="10%"
        left="2%"
        rotation={-6}
      />
      
      <div className="wrap content-layer">
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
            <span style={{ width: 40, height: 1, backgroundColor: "var(--accent)" }} />
            <p className="t-label">Engineering Toolbox</p>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {TOOLBOX.map((category, i) => (
            <Reveal key={category.category} delay={0.1 * i}>
              <div 
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "2rem"
                }}
                className="lg:grid-cols-[1fr_3fr]"
              >
                {/* Category Title */}
                <div>
                  <h3 className="t-headline" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                    {category.category}
                  </h3>
                </div>

                {/* Grid of skill boxes */}
                <div 
                  style={{ 
                    display: "grid", 
                    gap: "1px", 
                    background: "var(--border)",
                    border: "1px solid var(--border)"
                  }}
                  className="grid-cols-2 md:grid-cols-4"
                >
                  {category.items.map((item) => (
                    <div style={{ background: "var(--bg)" }} key={item.name}>
                      <SkillBox item={item} />
                    </div>
                  ))}
                  
                  {/* Fill empty spots in grid with blank architectural panels */}
                  {Array.from({ length: 4 - (category.items.length % 4 || 4) }).map((_, j) => (
                    <div key={`blank-${j}`} style={{ background: "var(--bg)" }}>
                      <div className="premium-panel" style={{ height: "100%", opacity: 0.3 }} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
