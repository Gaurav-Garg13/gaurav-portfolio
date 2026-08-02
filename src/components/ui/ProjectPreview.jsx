import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function PortSpyTerminal() {
  const [lines, setLines] = useState([]);
  const [started, setStarted] = useState(false);
  const [complete, setComplete] = useState(false);
  const ref = useRef(null);

  const script = [
    { type: "cmd",     text: "$ portspy --target localhost --ports 1-1024", delay: 0 },
    { type: "blank",   text: "",                                              delay: 350 },
    { type: "info",    text: "  PortSpy v1.0 — TCP Port Scanner",           delay: 600 },
    { type: "dim",     text: "  Target   : 127.0.0.1",                       delay: 780 },
    { type: "dim",     text: "  Ports    : 1 – 1024",                        delay: 900 },
    { type: "dim",     text: "  Threads  : 100",                             delay: 1020 },
    { type: "blank",   text: "",                                              delay: 1150 },
    { type: "dim",     text: "  Scanning ·····",                             delay: 1300 },
    { type: "blank",   text: "",                                              delay: 1800 },
    { type: "header",  text: "  PORT    STATE     SERVICE",                  delay: 2000 },
    { type: "divider", text: "  ──────────────────────────",                 delay: 2100 },
    { type: "open",    text: "  22      OPEN      SSH",                      delay: 2400 },
    { type: "open",    text: "  80      OPEN      HTTP",                     delay: 2700 },
    { type: "closed",  text: "  110     CLOSED    POP3",                     delay: 2950 },
    { type: "filtered",text: "  443     FILTERED  HTTPS",                    delay: 3200 },
    { type: "open",    text: "  3000    OPEN      React Dev",                delay: 3450 },
    { type: "filtered",text: "  8080    FILTERED  HTTP-Alt",                 delay: 3700 },
    { type: "blank",   text: "",                                              delay: 3950 },
    { type: "success", text: "  ✓ Scan complete  ·  3 open  ·  1 closed  ·  2 filtered", delay: 4200 },
    { type: "dim",     text: "  Time: 0.82s  ·  Ports scanned: 1024",       delay: 4500 },
  ];

  useEffect(() => {
    if (!started || lines.length >= script.length) return;
    if (lines.length === script.length) { setComplete(true); return; }
    const next = script[lines.length];
    const t = setTimeout(() => {
      setLines(prev => [...prev, next]);
      if (lines.length + 1 === script.length) setComplete(true);
    }, next.delay - (lines.length === 0 ? 0 : script[lines.length - 1].delay));
    return () => clearTimeout(t);
  // eslint-disable-next-line
  }, [started, lines]);

  // Restart on re-entry into view
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  function restart() {
    setLines([]);
    setComplete(false);
    setTimeout(() => setStarted(true), 100);
  }

  const colorMap = {
    cmd:     "#C09A6A",
    info:    "#7A9E85",
    dim:     "#665F58",
    header:  "#9E9991",
    divider: "#3A332B",
    open:    "#7A9E85",
    closed:  "#9E6B6B",
    filtered:"#665F58",
    success: "#C09A6A",
    blank:   "transparent",
  };

  return (
    <div ref={ref} className="terminal">
      {/* Title bar */}
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: "#FF5F57" }} />
        <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
        <div className="terminal-dot" style={{ background: "#28C840" }} />
        <span style={{ marginLeft: 8, color: "#665F58", fontSize: "0.6875rem", fontFamily: "var(--font-mono)" }}>
          portspy — bash
        </span>
        {complete && (
          <button
            onClick={restart}
            style={{
              marginLeft: "auto",
              color: "#665F58",
              fontSize: "0.6875rem",
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#C09A6A"}
            onMouseLeave={e => e.currentTarget.style.color = "#665F58"}
          >
            ↺ replay
          </button>
        )}
      </div>

      {/* Body */}
      <div className="terminal-body">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {line.type === "blank" ? (
              <div style={{ height: "0.875em" }} />
            ) : line.type === "divider" ? (
              <div style={{ color: colorMap.divider, letterSpacing: 0 }}>{line.text}</div>
            ) : (
              <div style={{ color: colorMap[line.type] || "#C8C0B4" }}>
                {line.text}
              </div>
            )}
          </motion.div>
        ))}

        {/* Cursor */}
        {started && !complete && (
          <motion.span
            style={{
              display: "inline-block",
              width: 7,
              height: "0.9em",
              background: "#C09A6A",
              verticalAlign: "middle",
              borderRadius: 1,
            }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
      </div>
    </div>
  );
}
