import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  dark: true,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (dark) {
      root.classList.add("dark");
      root.classList.remove("light");
      body.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#141210");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      body.classList.add("light");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#F7F5F0");
    }
  }, [dark]);

  const toggle = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
