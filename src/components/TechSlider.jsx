import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Icône compacte à gauche de la pill */
function PillIcon() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
      </svg>
    </span>
  );
}

/** Données issues du CV (tu peux modifier l'ordre ou en ajouter) */
const RAW_ITEMS = [
  { label: "Laravel", meta: "PHP Framework" },
  { label: "Bootstrap", meta: "CSS Framework" },
  { label: "Primefaces", meta: "JSF UI" },
  { label: "PySpark", meta: "Langage" },
  { label: "Python", meta: "Langage" },
  { label: "Scala", meta: "Langage" },
  { label: "SQL", meta: "Langage" },
  { label: "Java", meta: "Langage" },
  { label: "C / C++", meta: "Langage" },
  { label: "JavaScript", meta: "Langage" },
  { label: "PHP", meta: "Langage" },
  { label: "scikit-learn", meta: "ML" },
  { label: "TensorFlow", meta: "Deep Learning" },
  { label: "Keras", meta: "Deep Learning" },
  { label: "OpenCV", meta: "Vision" },
  { label: "matplotlib / seaborn", meta: "Viz" },
  { label: "NLTK / spaCy", meta: "NLP" },
  { label: "Azure Databricks", meta: "Plateforme" },
  { label: "Informatica Cloud", meta: "ETL / iPaaS" },
  { label: "Power BI", meta: "BI" },
  { label: "Talend", meta: "ETL" },
  { label: "Snowflake", meta: "Cloud DWH" },
  { label: "Azure SQL", meta: "SGBD" },
  { label: "PostgreSQL", meta: "SGBD" },
  { label: "SQL Server", meta: "SGBD" },
  { label: "MySQL", meta: "SGBD" },
  { label: "Neo4j", meta: "Graph DB" },
  { label: "Git / GitLab", meta: "VCS" },
  { label: "Jira / Confluence", meta: "Gestion projet" },
  { label: "VS Code / IntelliJ", meta: "IDE" },
];

export default function TechSlider({
  autoplay = true,
  interval = 2500,
  items = RAW_ITEMS,
}) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const length = safeItems.length;

  useEffect(() => {
    if (!autoplay || length === 0) return;
    timer.current = setInterval(() => setIdx((i) => (i + 1) % length), interval);
    return () => clearInterval(timer.current);
  }, [autoplay, interval, length]);

  const go = (i) => setIdx(((i % length) + length) % length);

  const current = safeItems[idx] || { label: "", meta: "" };
  const line = `${current.label} — ${current.meta}`;

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* PILL */}
      <button
        type="button"
        className="pill inline-flex items-center gap-3 max-w-[88vw] sm:max-w-[540px]"
        onMouseEnter={() => timer.current && clearInterval(timer.current)}
        onMouseLeave={() => {
          if (!autoplay || length === 0) return;
          timer.current = setInterval(() => setIdx((i) => (i + 1) % length), interval);
        }}
        style={{ padding: "10px 18px" }}
      >
        <PillIcon />

        {/* Une seule ligne: label — meta (nowrap + ellipsis) */}
        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-base font-medium"
              style={{ color: "var(--heading)" }}
              title={line}
            >
              {current.label} <span className="opacity-70">— {current.meta}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </button>

      {/* Dots */}
      <div className="mt-3 flex items-center gap-2">
        {safeItems.slice(0, 8).map((_, i) => {
          const active = i === (idx % 8);
          return (
            <span
              key={i}
              onClick={() => go(i)}
              className="h-1.5 w-1.5 rounded-full cursor-pointer"
              style={{
                background: active
                  ? "var(--accent)"
                  : "color-mix(in srgb, var(--text) 20%, transparent)",
                opacity: active ? 1 : 0.7,
              }}
              aria-label={`Aller à l’élément ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
