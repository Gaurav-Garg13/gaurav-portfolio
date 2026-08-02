import { FolderGit2, ArrowRight, Code2 } from "lucide-react";
import { CASE_STUDIES } from "../../lib/constants";
import PortSpyTerminal from "../ui/ProjectPreview";

function GithubIcon({ size = 14, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  // Only display three featured projects
  const featuredProjects = CASE_STUDIES.slice(0, 3);

  return (
    <section id="work" className="section-pad bg-blueprint">
      <div className="wrap content-layer">
        <div className="section-grid">
          
          {/* 1. Number Column */}
          <div className="section-num sticky-col">
            03
          </div>

          {/* 2. Intro Column */}
          <div className="sticky-col" style={{ paddingRight: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <FolderGit2 size={18} style={{ color: "var(--accent)" }} />
              <span className="t-label" style={{ color: "var(--accent)" }}>PORTFOLIO WORK</span>
            </div>
            <h2 className="t-headline" style={{ marginBottom: "1.5rem" }}>
              Selected Work
            </h2>
            <p className="t-body" style={{ marginBottom: "2.5rem", maxWidth: "320px", lineHeight: 1.6, color: "var(--text-2)" }}>
              A collection of software engineering and cybersecurity projects focused on solving practical problems.
            </p>
          </div>

          {/* 3. Content Column (Stacked Cards) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="premium-card lg:grid-cols-2"
                data-cursor-type="project"
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr",
                  gap: "2rem",
                  padding: "2rem"
                }}
              >
                {/* Card Left: Text */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span className="t-mono" style={{ color: "var(--accent)" }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.35rem", fontWeight: 600, color: "var(--text-1)", marginBottom: "0.5rem" }}>
                    {project.title}
                  </h3>
                  <p className="t-body" style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "1.5rem", flex: 1, lineHeight: 1.6 }}>
                    {project.subtitle} — {project.problem}
                  </p>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ border: "1px solid var(--border-strong)", borderRadius: "4px", padding: "4px 8px", fontSize: "0.65rem", letterSpacing: "0.05em", fontFamily: "var(--font-mono)", color: "var(--text-2)", background: "var(--bg-secondary)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: "0.75rem", color: "var(--accent)", padding: "0.5rem 1rem" }}>
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                    <button className="btn-secondary" style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}>
                      View Details
                    </button>
                  </div>
                </div>

                {/* Card Right: Image/Preview */}
                <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "6px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "240px", padding: "1rem" }}>
                  {project.id === "portspy" ? (
                    <div style={{ transform: "scale(0.85)", transformOrigin: "center", width: "100%", pointerEvents: "none" }}>
                      <PortSpyTerminal />
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-3)" }}>
                      <Code2 size={18} />
                      <span className="t-mono">Preview Data</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Explore Archive CTA */}
            <div style={{ marginTop: "3rem", display: "flex" }}>
              <button 
                onClick={() => window.location.href = '/projects'}
                className="premium-card" 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "1.5rem 2rem", 
                  cursor: "pointer", 
                  width: "100%",
                  border: "1px solid var(--accent)",
                  background: "var(--bg-secondary)"
                }}
              >
                <span className="t-headline" style={{ fontSize: "1.25rem", color: "var(--text-1)" }}>
                  Explore Complete Project Archive
                </span>
                <ArrowRight size={20} style={{ color: "var(--accent)" }} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
