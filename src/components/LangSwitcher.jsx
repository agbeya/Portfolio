import React from "react";
import { useLang } from "../contexts/LangContext";

export default function LangSwitcher() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      aria-label="Changer la langue"
      className="fixed left-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-md shadow-lg transition"
      style={{ background: 'var(--pill-bg)', borderColor: 'var(--border)' }}
      title={lang === "fr" ? "Switch to English" : "Passer en Français"}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
      <span className="text-sm font-medium">{lang.toUpperCase()}</span>
    </button>
  );
}
