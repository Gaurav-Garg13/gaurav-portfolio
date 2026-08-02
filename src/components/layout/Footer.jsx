import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      <div
        className="wrap"
        style={{
          paddingBlock: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--text-3)",
            letterSpacing: "0.04em",
          }}
        >
          // {new Date().getFullYear()} GG
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--text-3)",
            letterSpacing: "0.04em",
            textTransform: "uppercase"
          }}
        >
          <Code2 size={14} style={{ color: "var(--accent)" }} />
          Handcrafted in code
        </p>
      </div>
    </footer>
  );
}
