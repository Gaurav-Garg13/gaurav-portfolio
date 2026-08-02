import { useEffect, useRef } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Hammer, FolderGit2, Mail, FileText, Sun, Moon, Copy, Terminal } from "lucide-react";
import { PERSONAL, CASE_STUDIES } from "../../lib/constants";
import { useToast } from "./Toast";
import { useTheme } from "../../context/ThemeContext";

function GithubIcon({ size = 16, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function Shortcut({ label }) {
  return (
    <span
      style={{
        marginLeft: "auto",
        fontFamily: "var(--font-mono)",
        fontSize: "0.625rem",
        color: "var(--text-3)",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </span>
  );
}

export default function CommandPalette({ open, onClose }) {
  const inputRef = useRef(null);
  const { showToast } = useToast();
  const { dark, toggle } = useTheme();

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  function nav(id) {
    const el = document.querySelector(id);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
    onClose();
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      showToast("Copied email address.");
    } catch { /* noop */ }
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              top: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 201,
              width: "min(92vw, 540px)",
            }}
          >
            <Command label="Command Palette" loop>
              <Command.Input ref={inputRef} placeholder="Search architecture, case studies, or commands..." />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Navigation">
                  <Command.Item onSelect={() => nav("#philosophy")}>
                    <Lightbulb size={16} style={{ opacity: 0.7, color: "var(--accent)" }} />
                    Philosophy
                  </Command.Item>
                  <Command.Item onSelect={() => nav("#building")}>
                    <Hammer size={16} style={{ opacity: 0.7, color: "var(--accent)" }} />
                    The Workshop
                  </Command.Item>
                  <Command.Item onSelect={() => nav("#work")}>
                    <FolderGit2 size={16} style={{ opacity: 0.7, color: "var(--accent)" }} />
                    Case Studies
                  </Command.Item>
                  <Command.Item onSelect={() => nav("#contact")}>
                    <Mail size={16} style={{ opacity: 0.7, color: "var(--accent)" }} />
                    Contact & Apps
                  </Command.Item>
                </Command.Group>

                <Command.Separator />

                <Command.Group heading="Case Studies">
                  {CASE_STUDIES.map(p => (
                    <Command.Item key={p.id} onSelect={() => nav("#work")}>
                      <Terminal size={16} style={{ opacity: 0.7, color: "var(--accent)" }} />
                      {p.title} <span style={{color: 'var(--text-3)', fontSize: '0.8rem', marginLeft: '6px'}}>{p.subtitle}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Separator />

                <Command.Group heading="Actions & Theme">
                  <Command.Item onSelect={() => { toggle(); onClose(); }}>
                    {dark ? <Sun size={16} style={{ color: "#EAB308" }} /> : <Moon size={16} style={{ color: "var(--accent)" }} />}
                    Toggle {dark ? "Light" : "Dark"} Theme
                    <Shortcut label="Theme" />
                  </Command.Item>
                  <Command.Item onSelect={() => { window.open(PERSONAL.github, "_blank"); onClose(); }}>
                    <GithubIcon size={16} style={{ opacity: 0.7 }} />
                    Open GitHub Profile
                  </Command.Item>
                  <Command.Item onSelect={copyEmail}>
                    <Copy size={16} style={{ opacity: 0.7 }} />
                    Copy Email Address
                    <Shortcut label="Copy" />
                  </Command.Item>
                  <Command.Item onSelect={() => { window.open(PERSONAL.resumeUrl, "_blank"); onClose(); }}>
                    <FileText size={16} style={{ opacity: 0.7 }} />
                    Download Resume PDF
                    <Shortcut label="PDF" />
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
