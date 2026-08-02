import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-pad bg-blueprint">
      <div className="wrap content-layer">
        <div className="section-grid">
          
          {/* 1. Number Column */}
          <div className="section-num sticky-col">
            02
          </div>

          {/* 2. Intro Column */}
          <div className="sticky-col" style={{ paddingRight: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <User size={18} style={{ color: "var(--accent)" }} />
              <span className="t-label" style={{ color: "var(--accent)" }}>PROFILE</span>
            </div>
            <h2 className="t-headline" style={{ marginBottom: "1.5rem" }}>
              About Me
            </h2>
          </div>

          {/* 3. Content Column */}
          <div>
            <p className="t-body" style={{ maxWidth: "540px", marginBottom: "1.5rem", color: "var(--text-2)", lineHeight: 1.7 }}>
              I am a third-year Computer Science student with a specialization in Cyber Security. My core interest lies in developing secure software and understanding the intricate mechanisms that keep systems safe from vulnerabilities.
            </p>
            <p className="t-body" style={{ maxWidth: "540px", marginBottom: "1.5rem", color: "var(--text-2)", lineHeight: 1.7 }}>
              I have a strong passion for solving complex problems, whether it involves debugging a stubborn piece of code or designing an efficient algorithm from scratch. Rather than just focusing on theory, I learn best by building practical projects that have real-world applications.
            </p>
            <p className="t-body" style={{ maxWidth: "540px", color: "var(--text-2)", lineHeight: 1.7 }}>
              This hands-on approach allows me to continuously refine my skills and bridge the gap between academic concepts and industry standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
