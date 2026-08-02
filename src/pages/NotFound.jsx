import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "var(--c-t3)",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            letterSpacing: "-0.025em",
            color: "var(--c-t1)",
            lineHeight: 1.15,
            marginBottom: "1rem",
            maxWidth: 420,
          }}
        >
          Looks like this page
          <br />
          escaped the firewall.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9375rem",
            color: "var(--c-t2)",
            marginBottom: "2.5rem",
            maxWidth: 340,
            lineHeight: 1.65,
          }}
        >
          The route you're looking for doesn't exist or may have been moved.
        </p>

        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--c-t2)",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--c-t1)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--c-t2)"}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 7H1M1 7l6-6M1 7l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Return home
        </a>
      </motion.div>
    </div>
  );
}
