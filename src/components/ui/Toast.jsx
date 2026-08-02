import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToastCtx = createContext(null);
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, duration = 3500) => {
    const id = Date.now() + Math.random();
    setToasts(p => [...p, { id, message }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), duration);
  }, []);

  return (
    <ToastCtx.Provider value={{ showToast }}>
      {children}
      <div className="toast-wrap">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: 10,
                background: "var(--c-t1)",
                color: "var(--c-bg)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 450,
                letterSpacing: "0.01em",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                whiteSpace: "nowrap",
                pointerEvents: "auto",
                lineHeight: 1.5,
              }}
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}
