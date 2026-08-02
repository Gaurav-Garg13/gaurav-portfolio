import { Lightbulb } from "lucide-react";
import { PHILOSOPHY, NOTEBOOK_ENTRIES } from "../../lib/constants";
import Reveal from "../shared/SectionTransition";
import StickyNote from "../ui/StickyNote";

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-pad bg-blueprint" style={{ position: "relative" }}>
      
      {/* Scattered Notebook Entry */}
      <StickyNote 
        note={NOTEBOOK_ENTRIES[2]} 
        style={{ top: "15%", right: "8%" }}
      />
      
      <div className="wrap content-layer">
        
        {/* Structural Separator */}
        <div className="separator" style={{ marginBottom: "5rem" }}>
          <span className="grid-ref" style={{ top: -14, left: 20 }}>[ SEC-02 ]</span>
        </div>

        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "3rem" }}>
            <Lightbulb size={18} style={{ color: "var(--accent)" }} />
            <p className="t-label" style={{ color: "var(--accent)" }}>How I Think</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="t-headline" style={{ marginBottom: "5rem" }}>
            Engineering Philosophy
          </h2>
        </Reveal>

        <div style={{ display: "grid", gap: "4rem", maxWidth: "800px" }}>
          {PHILOSOPHY.map((item, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div 
                style={{ 
                  paddingLeft: "2rem",
                  borderLeft: "2px solid var(--accent)",
                  position: "relative"
                }}
              >
                {/* Engraved style title */}
                <h3 
                  style={{ 
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "var(--text-1)",
                    letterSpacing: "-0.02em",
                    marginBottom: "1rem"
                  }}
                >
                  {item.title}
                </h3>
                
                <p className="t-body-large" style={{ color: "var(--text-2)", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
