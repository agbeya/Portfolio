// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { ABOUT, EXPERIENCES } from "../data/data";
import { useLang } from "../contexts/LangContext";

function SectionIcon() {
  return (
    <span className="secicon mr-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20a6 6 0 0 1 12 0" />
      </svg>
    </span>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2">
      <span
        className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-[6px] border"
        style={{ borderColor: "var(--border)", background: "var(--card-bg)", color: "var(--accent)" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="body90">{children}</span>
    </li>
  );
}

export default function About() {
  const { t, lang } = useLang();

  // helper: accepte string | {fr,en} | array de ceux-ci
  const tx = (v) =>
    Array.isArray(v)
      ? v.map(tx)
      : typeof v === "object" && v !== null
      ? v[lang] ?? v.fr ?? ""
      : v ?? "";

  const current = Array.isArray(EXPERIENCES) && EXPERIENCES.length > 0 ? EXPERIENCES[0] : null;

  const contentList = tx(ABOUT.content);   // -> array de strings localisées
  const bulletsList = tx(ABOUT.bullets);   // -> array de strings localisées

  return (
    <motion.section
      id="about"
      className="px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        <SectionIcon /> {t("sections.about")}
      </h2>
      <p className="section-subtitle">{t("subtitles.about")}</p>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="card lg:col-span-2">
          {current && (
            <p className="muted text-xs mb-3">
              {t("about.now", lang === "fr" ? "Actuellement :" : "Currently:")}{" "}
              <span className="font-medium" style={{ color: "var(--heading)" }}>
                {tx(current.title) || current.title}
              </span>{" "}
              — {tx(current.company) || current.company} • {tx(current.date) || current.date}
            </p>
          )}

          <div className="space-y-4 leading-relaxed body90">
            {(contentList || []).map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {(bulletsList || []).length > 0 && (
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {bulletsList.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
              </ul>
            </div>
          )}
        </article>

        <aside className="card">
          <p className="text-sm muted mb-3">{t("about.highlights")}</p>
          <ul className="space-y-3">
            <Bullet>{t("about.highlight1", "Ingénierie des données (ETL/ELT), qualité & industrialisation")}</Bullet>
            <Bullet>{t("about.highlight2", "Culture produit, pragmatisme et sens de l’impact")}</Bullet>
            <Bullet>{t("about.highlight3", "Collaboration, mentoring et documentation claire")}</Bullet>
          </ul>
        </aside>
      </div>
    </motion.section>
  );
}
