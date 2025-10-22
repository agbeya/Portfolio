// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/data";
import { useLang } from "../contexts/LangContext";

function SectionIcon() {
  return (
    <span className="secicon mr-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M10 6h4a2 2 0 0 1 2 2v2h-8V8a2 2 0 0 1 2-2z" />
        <rect x="2" y="10" width="20" height="10" rx="2" />
      </svg>
    </span>
  );
}
function CardIcon() {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="7" cy="12" r="2" /><circle cx="17" cy="12" r="2" /><path d="M9 12h6" />
      </svg>
    </span>
  );
}
function CardDeco({ path, side = "left" }) {
  const isLeft = side === "left";
  return (
    <div className={`pointer-events-none absolute inset-y-0 ${isLeft ? "left-0" : "right-0"} w-2/3`}>
      <div className="absolute inset-0" style={{ background: isLeft ? "linear-gradient(to right, color-mix(in srgb, var(--accent-10) 14%, transparent) 0%, transparent 70%)" : "linear-gradient(to left, color-mix(in srgb, var(--accent-10) 14%, transparent) 0%, transparent 70%)" }} />
      <svg viewBox="0 0 24 24" className={`absolute ${isLeft ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 h-36 w-36`} fill="none" stroke="currentColor" strokeWidth="1.4" style={{ opacity: 0.12, color: "var(--accent-10)" }}>
        <path d={path} />
      </svg>
    </div>
  );
}
function Chip({ children }) { return <span className="chip">{children}</span>; }

export function Experience() {
  const { t, lang } = useLang();
  const tx = (v) => (typeof v === "object" && v !== null ? v[lang] ?? v.fr ?? "" : v ?? "");

  const ICONS = [
    "M10 6h4a2 2 0 0 1 2 2v2H8V8a2 2 0 0 1 2-2zM3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z",
    "M3 15a4 4 0 0 1 4-4 6 6 0 1 1 11 3h2a3 3 0 1 1 0 6H6a3 3 0 1 1-3-5z",
    "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2v12c0 1.1-3.6 2-8 2s-8-.9-8-2V6zM4 6c0 1.1 3.6 2 8 2s8-.9 8-2",
    "M8 9l-3 3 3 3M16 9l3 3-3 3M10 19l4-14",
    "M4 20V10m6 10V4m6 16v-6m4 6V8",
  ];

  return (
    <motion.section
      id="experiences"
      className="px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title"><SectionIcon /> {t("sections.experiences")}</h2>
      <p className="section-subtitle">{t("subtitles.experiences")}</p>

      <div className="grid gap-5 sm:grid-cols-2 items-start">
        {EXPERIENCES.map((e, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          const deco = ICONS[i % ICONS.length];
          return (
            <motion.div key={i} className="group relative card card-hover will-change-transform overflow-hidden self-start" whileHover={{ y: -3 }}>
              <CardDeco path={deco} side={side} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <CardIcon />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold" style={{ color: "var(--heading)" }}>
                      {tx(e.title) || e.title}
                    </h3>
                    <p className="muted text-sm truncate">
                      {tx(e.company) || e.company} — {tx(e.date) || e.date}
                    </p>
                  </div>
                </div>
                <p className="mt-3 body90 leading-relaxed">{tx(e.desc) || e.desc}</p>
                {Array.isArray(e.stack) && e.stack.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.stack.map((s, k) => <Chip key={k}>{s}</Chip>)}
                  </div>
                )}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-[var(--accent-20)] transition" />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
