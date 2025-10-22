import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label="Basculer thème"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 rounded-full border px-3 py-3 backdrop-blur-md shadow-lg transition"
      style={{ background: 'var(--pill-bg)', borderColor: 'var(--border)' }}
      title={isDark ? "Passer en clair" : "Passer en sombre"}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-200" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
        </svg>
      )}
    </button>
  );
}
