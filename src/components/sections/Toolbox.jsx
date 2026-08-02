import { Code2, Layout, Server, ShieldCheck, Terminal, Database, Brain, Wrench, ArrowRight } from "lucide-react";
import { TOOLBOX_CATEGORIES } from "../../lib/constants";

const ICON_MAP = {
  "Languages": Code2,
  "Frontend": Layout,
  "Backend": Server,
  "Cyber Security": ShieldCheck,
  "Tools": Terminal,
  "Databases": Database,
  "Concepts": Brain
};

function ToolboxCard({ title, items }) {
  const Icon = ICON_MAP[title] || Wrench;

  return (
    <div className="premium-card" style={{ padding: "1.5rem", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
        <Icon size={16} style={{ color: "var(--accent)" }} />
        <h3 className="t-mono" style={{ color: "var(--text-1)", textTransform: "uppercase", fontSize: "0.8125rem", letterSpacing: "0.05em", fontWeight: 600 }}>{title}</h3>
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
        {items.map(item => (
          <li key={item} className="t-body" style={{ fontSize: "0.8125rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", opacity: 0.6 }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="section-pad bg-blueprint">
      <div className="wrap content-layer">
        <div className="section-grid">
          
          {/* 1. Number Column */}
          <div className="section-num sticky-col">
            04
          </div>

          {/* 2. Intro Column */}
          <div className="sticky-col" style={{ paddingRight: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Wrench size={18} style={{ color: "var(--accent)" }} />
              <span className="t-label" style={{ color: "var(--accent)" }}>STACK & SKILLS</span>
            </div>
            <h2 className="t-headline" style={{ marginBottom: "1.5rem" }}>
              Toolbox
            </h2>
            <p className="t-body" style={{ marginBottom: "2.5rem", maxWidth: "320px" }}>
              Technologies and security tools I work with daily.
            </p>
            
            <button className="btn-primary" style={{ marginTop: "1rem" }}>
              View full loadout <ArrowRight size={16} />
            </button>
          </div>

          {/* 3. Content Column (Grid) */}
          <div style={{ 
            display: "grid", 
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
          }}>
            {TOOLBOX_CATEGORIES.map(category => (
              <ToolboxCard key={category.name} title={category.name} items={category.items} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
