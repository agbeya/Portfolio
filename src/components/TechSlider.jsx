import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../data/data";
import { useLang } from "../contexts/LangContext";

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

/** Groupes de compétences (SKILLS, data.js) utilisés pour alimenter le slider,
 *  afin que le contenu reste toujours aligné avec la section Compétences. */
const GROUPS = [
  { key: "genai", metaKey: "skills.groups.genai" },
  { key: "languages", metaKey: "skills.groups.languages" },
  { key: "data_processing", metaKey: "skills.groups.processing" },
  { key: "cloud_dw", metaKey: "skills.groups.cloudDw" },
  { key: "etl_orchestration", metaKey: "skills.groups.etl" },
  { key: "databases", metaKey: "skills.groups.db" },
  { key: "bi_analytics", metaKey: "skills.groups.bi" },
  { key: "devops_tools", metaKey: "skills.groups.devops" },
];

export default function TechSlider({
  autoplay = true,
  interval = 2500,
  items,
}) {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const defaultItems = useMemo(
    () =>
      GROUPS.flatMap((g) =>
        (SKILLS[g.key] || []).map((label) => ({ label, meta: t(g.metaKey) }))
      ),
    [t]
  );

  const safeItems = useMemo(() => (items || defaultItems).filter(Boolean), [items, defaultItems]);
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
