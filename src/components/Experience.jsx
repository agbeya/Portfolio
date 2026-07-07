// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/data";
import { useLang } from "../contexts/LangContext";
import { TechIcon } from "./TechIcon";

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
function NodeDot({ current }) {
  return (
    <span
      className="relative z-10 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
      style={{
        background: current ? "var(--accent)" : "var(--card-bg)",
        border: `2px solid var(--accent)`,
        boxShadow: current ? "0 0 0 4px var(--accent-10)" : "none",
      }}
      aria-hidden
    >
      {current && (
        <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: "var(--accent)", opacity: 0.5 }} />
      )}
    </span>
  );
}
function Chip({ children }) {
  return (
    <span className="chip inline-flex items-center gap-1.5">
      <TechIcon name={children} />
      {children}
    </span>
  );
}

export function Experience() {
  const { t, lang } = useLang();
  const tx = (v) => (typeof v === "object" && v !== null ? v[lang] ?? v.fr ?? "" : v ?? "");

  return (
    <motion.section
      id="experiences"
      className="px-4 sm:px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title"><SectionIcon /> {t("sections.experiences")}</h2>
      <p className="section-subtitle">{t("subtitles.experiences")}</p>

      <div className="relative mx-auto max-w-4xl">
        {/* Ligne verticale */}
        <div
          className="absolute top-0 bottom-0 left-[7px] sm:left-1/2 w-px sm:-translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, var(--accent-20), var(--border) 15%, var(--border) 85%, transparent)" }}
          aria-hidden
        />

        <div className="flex flex-col gap-10">
          {EXPERIENCES.map((e, i) => {
            const isRight = i % 2 === 1;
            const isCurrent = i === 0;
            return (
              <div key={i} className="relative">
                {/* point central */}
                <div className="absolute left-[7px] sm:left-1/2 top-1.5 sm:-translate-x-1/2 z-10">
                  <NodeDot current={isCurrent} />
                </div>

                <div className={`flex flex-col sm:flex-row ${isRight ? "sm:flex-row-reverse" : ""} gap-5 sm:gap-0`}>
                  <div className="w-full sm:w-1/2 pl-8 sm:pl-0">
                    <div className={isRight ? "sm:pl-10" : "sm:pr-10"}>
                      <ExperienceCard e={e} tx={tx} t={t} align={isRight ? "right" : "left"} isCurrent={isCurrent} />
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" aria-hidden />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceCard({ e, tx, t, align, isCurrent }) {
  return (
    <motion.div
      className="card card-hover"
      style={isCurrent ? { borderColor: "var(--accent-20)" } : undefined}
      initial={{ opacity: 0, x: align === "right" ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold" style={{ color: "var(--heading)" }}>
            {tx(e.title) || e.title}
          </h3>
          <p className="muted text-sm">{tx(e.company) || e.company}</p>
        </div>
        {isCurrent && (
          <span
            className="flex-shrink-0 text-xs font-medium rounded-full px-2.5 py-0.5"
            style={{ background: "var(--accent-10)", color: "var(--accent)", border: "1px solid var(--accent-20)" }}
          >
            {t("exp.current", "En cours")}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium" style={{ color: "var(--accent)" }}>{tx(e.date) || e.date}</p>
      <p className="mt-3 body90 leading-relaxed">{tx(e.desc) || e.desc}</p>
      {Array.isArray(e.stack) && e.stack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {e.stack.map((s, k) => <Chip key={k}>{s}</Chip>)}
        </div>
      )}
    </motion.div>
  );
}
