import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { label: "System Status",  value: "All systems operational", dot: "#7A9E85" },
  { label: "Projects Built", value: "1 · more shipping soon",  dot: "#C09A6A" },
  { label: "Coffee Consumed",value: "∞",                        dot: "#C09A6A" },
  { label: "Current Focus",  value: "Cybersecurity & Full-Stack",dot: "#7A9E85" },
];

export default function DiagnosticsPanel({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 201,
              width: "min(92vw, 420px)",
              background: "var(--c-elevated)",
              border: "1px solid var(--c-border)",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 32px 64px -16px rgba(0,0,0,0.25)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1rem 1.25rem",
                borderBottom: "1px solid var(--c-bfaint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7A9E85", display: "inline-block" }} />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--c-t1)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  System Diagnostics
                </span>
              </div>
              <button
                onClick={onClose}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--c-t3)",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--c-t1)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--c-t3)"}
              >
                ESC
              </button>
            </div>

            {/* Rows */}
            <div style={{ padding: "0.75rem 0" }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 1.25rem",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, display: "inline-block", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        color: "var(--c-t2)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "0.8125rem",
                      color: "var(--c-t1)",
                      textAlign: "right",
                    }}
                  >
                    {s.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "0.75rem 1.25rem",
                borderTop: "1px solid var(--c-bfaint)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--c-t3)",
                  letterSpacing: "0.04em",
                }}
              >
                ↑↑↓↓←→←→BA · You found the easter egg.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
