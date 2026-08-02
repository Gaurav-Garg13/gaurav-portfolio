import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Terminal, Compass, Briefcase, Wrench, StickyNote, Hammer, Mail } from "lucide-react";
import { PERSONAL } from "../../lib/constants";
import { useTheme } from "../../context/ThemeContext";

const NAV_LINKS = [
  // { label: "Journey", href: "#journey", icon: Compass },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Toolbox", href: "#toolbox", icon: Wrench },
  // { label: "Currently Building", href: "#building", icon: Hammer },
  { label: "Connect", href: "#contact", icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(href) {
    const el = document.querySelector(href);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 72,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid var(--border)",
        background: scrolled ? (dark ? "rgba(20,18,16,0.85)" : "rgba(247,245,240,0.85)") : "var(--bg)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s"
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="header-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--accent)",
            letterSpacing: "-0.02em"
          }}
        >
          <Terminal size={20} style={{ color: "var(--accent)" }} />
          <span>{PERSONAL.initials}</span>
        </button>

        {/* Center Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="t-label nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "var(--text-3)",
                  transition: "color 0.25s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--text-1)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-3)"}
              >
                <Icon size={14} style={{ opacity: 0.8 }} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={toggle}
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: "8px",
              border: "1px solid var(--border-strong)",
              background: "var(--bg-primary)",
              color: "var(--text-1)",
              transition: "all 0.2s ease"
            }}
          >
            <AnimatePresence mode="wait">
              {dark ? (
                <motion.div
                  key="sun"
                  initial={{ scale: 0.5, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Sun size={18} style={{ color: "#EAB308" }} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ scale: 0.5, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0.5, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Moon size={18} style={{ color: "var(--accent)" }} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
}
