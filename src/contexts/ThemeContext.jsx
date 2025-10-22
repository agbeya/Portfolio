import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeCtx = createContext({ theme: "dark", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("style", `color-scheme: ${theme}`);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme: () => setTheme(t => (t === "dark" ? "light" : "dark")) }), [theme]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
export const useTheme = () => useContext(ThemeCtx);
