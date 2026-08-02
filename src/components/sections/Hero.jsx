import { motion } from "framer-motion";
import { Shield, Globe, Cpu, Lightbulb, ArrowRight, Download, Sparkles, MapPin, Clock } from "lucide-react";
import { PERSONAL } from "../../lib/constants";

function TechFocusItem({ icon: Icon, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Icon size={18} style={{ color: "var(--accent)" }} />
      <span className="t-label" style={{ color: "var(--text-2)" }}>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="bg-blueprint" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column" }}>
      <div className="wrap content-layer" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "120px" }}>

        <div className="section-grid" style={{ alignItems: "center", paddingBottom: "4rem" }}>

          {/* 1. Number Column */}
          <div className="section-num sticky-col">
            01
          </div>

          {/* 2. Intro Column */}
          <div style={{ paddingRight: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Sparkles size={14} style={{ color: "var(--accent)" }} />
              <p className="t-label" style={{ color: "var(--accent)", margin: 0 }}>✦ CYBERSECURITY STUDENT & DEVELOPER</p>
            </div>
            <h1 className="t-giant" style={{ marginBottom: "1.5rem" }}>
              GAURAV<br />GARG
            </h1>
            <p className="t-body-large" style={{ marginBottom: "2.5rem", maxWidth: "420px" }}>
              Building secure systems with code, curiosity,
              and continuous learning.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4rem" }}>
              <button
                className="btn-primary"
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore my work
                <ArrowRight size={16} />
              </button>

              <a href={PERSONAL.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                View resume
                <Download size={16} />
              </a>
            </div>

            {/* Current Status Strip */}
            <div>
              <p className="t-label" style={{ marginBottom: "0.75rem", color: "var(--text-3)" }}>CURRENT STATUS</p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success)" }} />
                  <span className="t-mono" style={{ fontSize: "0.75rem", color: "var(--text-1)" }}>Open to opportunities</span>
                </div>
                <span style={{ color: "var(--border-strong)" }}>|</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <MapPin size={12} style={{ color: "var(--text-3)" }} />
                  <span className="t-mono" style={{ fontSize: "0.75rem", color: "var(--text-2)" }}>Based in India</span>
                </div>
                <span style={{ color: "var(--border-strong)" }}>|</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Clock size={12} style={{ color: "var(--text-3)" }} />
                  <span className="t-mono" style={{ fontSize: "0.75rem", color: "var(--text-2)" }}>Responds within 24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Content Column (Portrait) */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", paddingTop: "2rem" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "380px", aspectRatio: "3/4" }}>

              {/* Editorial Guide Lines & Crop Marks */}
              <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "1px", height: "40px", background: "var(--accent)", opacity: 0.5 }} />
              <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />

              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "1px", height: "40px", background: "var(--accent)", opacity: 0.5 }} />
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />

              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "1px", height: "40px", background: "var(--accent)", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />

              <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "1px", height: "40px", background: "var(--accent)", opacity: 0.5 }} />
              <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "40px", height: "1px", background: "var(--accent)", opacity: 0.5 }} />

              {/* Extended Thin Center Lines */}
              <div style={{ position: "absolute", top: "-40px", left: "50%", width: "1px", height: "20px", background: "var(--accent)", opacity: 0.3 }} />
              <div style={{ position: "absolute", bottom: "-40px", left: "50%", width: "1px", height: "20px", background: "var(--accent)", opacity: 0.3 }} />
              <div style={{ position: "absolute", top: "50%", left: "-40px", width: "20px", height: "1px", background: "var(--accent)", opacity: 0.3 }} />
              <div style={{ position: "absolute", top: "50%", right: "-40px", width: "20px", height: "1px", background: "var(--accent)", opacity: 0.3 }} />

              {/* Architectural Annotations */}
              <span className="t-mono" style={{ position: "absolute", top: "-30px", left: 0, fontSize: "0.55rem", letterSpacing: "0.1em", color: "var(--accent)", opacity: 0.7 }}>FIG 1.0</span>
              <span className="t-mono" style={{ position: "absolute", top: "-30px", right: 0, fontSize: "0.55rem", letterSpacing: "0.1em", color: "var(--accent)", opacity: 0.7 }}>PORTRAIT</span>

              <span className="t-mono" style={{ position: "absolute", bottom: "-30px", right: 0, fontSize: "0.55rem", letterSpacing: "0.1em", color: "var(--accent)", opacity: 0.7 }}>REF: GG-001</span>
              <span className="t-mono" style={{ position: "absolute", bottom: "-30px", left: 0, fontSize: "0.55rem", letterSpacing: "0.1em", color: "var(--accent)", opacity: 0.7, writingMode: "vertical-rl", transform: "rotate(180deg)", transformOrigin: "left bottom", left: "-30px" }}>SCALE 1:1</span>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/pic.png"
                  alt="Gaurav Garg - Cyber Security Enthusiast"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "contrast(1.02) saturate(0.95)", display: "block" }}
                />

                {/* Warm vignette to integrate with page */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(20,18,16,0.25) 100%)", pointerEvents: "none" }} />

                {/* Subtle Grain over image */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")", mixBlendMode: "overlay" }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Focus Bottom Strip */}
      <div style={{ borderTop: "1px solid var(--border)", background: "var(--bg-primary)", paddingBlock: "1.5rem", position: "relative", zIndex: 10 }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <span className="t-label" style={{ color: "var(--text-3)" }}>TECH FOCUS</span>
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            <TechFocusItem label="Cyber Security" icon={Shield} />
            <TechFocusItem label="Web Development" icon={Globe} />
            <TechFocusItem label="System Design" icon={Cpu} />
            <TechFocusItem label="Problem Solving" icon={Lightbulb} />
          </div>
        </div>
      </div>
    </section>
  );
}
