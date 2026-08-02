import { useState, useEffect } from "react";

export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      // Allow Cmd+K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(o => !o);
      }
      
      // Allow '/'
      if (e.key === "/" && !open && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setOpen(true);
      }
    }
    
    // Allow typing "help"
    let buffer = "";
    function handleTyping(e) {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key.length === 1) {
        buffer += e.key;
        if (buffer.length > 4) buffer = buffer.slice(-4);
        if (buffer === "help") {
          setOpen(true);
          buffer = "";
        }
      }
    }

    window.addEventListener("keydown", handleKey);
    window.addEventListener("keydown", handleTyping);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("keydown", handleTyping);
    };
  }, [open]);

  return { open, setOpen };
}
