// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../data/data";
import { useLang } from "../contexts/LangContext";

function SectionIcon() {
  return (
    <span className="secicon mr-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      </svg>
    </span>
  );
}

function Chip({ children, accent }) {
  return (
    <motion.span
      className="chip"
      whileHover={{ scale: 1.06 }}
      style={accent ? { background: "var(--accent-10)", borderColor: "var(--accent-20)", color: "var(--accent)" } : undefined}
    >
      {children}
    </motion.span>
  );
}

function RowIcon({ path }) {
  return (
    <span
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
      style={{ background: "var(--card-bg)", border: "1px solid var(--border)", color: "var(--accent)" }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d={path} />
      </svg>
    </span>
  );
}

function SkillRow({ title, items, iconPath, accent, last }) {
  return (
    <div
      className={`grid sm:grid-cols-[13rem_1fr] gap-3 sm:gap-6 py-5 ${last ? "" : "border-b"}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-3">
        <RowIcon path={iconPath} />
        <p className="font-medium" style={{ color: "var(--heading)" }}>{title}</p>
      </div>
      <div className="flex flex-wrap content-start gap-2">
        {items.map((s, i) => <Chip key={i} accent={accent}>{s}</Chip>)}
      </div>
    </div>
  );
}

export function Skills() {
  const { t, lang } = useLang();

  // helper tx: accepts string | {fr,en} | array
  const tx = (v) =>
    Array.isArray(v)
      ? v.map(tx)
      : typeof v === "object" && v !== null
      ? v[lang] ?? v.fr ?? v.en ?? ""
      : v ?? "";

  const ICONS = {
    genai: "M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2zM5 16l.9 2.7L8.5 19l-2.6.9L5 22l-.9-2.1L1.5 19l2.6-.3L5 16zM19 14l.9 2.7L22.5 17l-2.6.9L19 20l-.9-2.1L15.5 17l2.6-.3L19 14z",
    languages: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z",
    processing: "M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4",
    cloudDw: "M3 15a4 4 0 014-4 6 6 0 1111 3h2a3 3 0 010 6H6a3 3 0 01-3-5z",
    etl: "M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7zM4 13h7v7H4z",
    db: "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2v12c0 1.1-3.6 2-8 2s-8-.9-8-2V6zM4 6c0 1.1 3.6 2 8 2s8-.9 8-2",
    chart: "M4 20V10m6 10V4m6 16v-6m4 6V8",
    tools: "M14 7a5 5 0 11-7 7L3 21l7-4a5 5 0 104-10z",
    soft: "M12 21c-4.4-2.8-8-6.4-8-10.4A4.6 4.6 0 0 1 8.6 6c1.4 0 2.6.7 3.4 1.8A4.1 4.1 0 0 1 15.4 6 4.6 4.6 0 0 1 20 10.6c0 4-3.6 7.6-8 10.4z",
  };

  const rows = [
    { title: t("skills.groups.genai"), items: SKILLS.genai, iconPath: ICONS.genai, accent: true },
    { title: t("skills.groups.languages"), items: SKILLS.languages, iconPath: ICONS.languages },
    { title: t("skills.groups.processing"), items: SKILLS.data_processing, iconPath: ICONS.processing },
    { title: t("skills.groups.cloudDw"), items: SKILLS.cloud_dw, iconPath: ICONS.cloudDw },
    { title: t("skills.groups.etl"), items: SKILLS.etl_orchestration, iconPath: ICONS.etl },
    { title: t("skills.groups.db"), items: SKILLS.databases, iconPath: ICONS.db },
    { title: t("skills.groups.bi"), items: SKILLS.bi_analytics, iconPath: ICONS.chart },
    { title: t("skills.groups.devops"), items: SKILLS.devops_tools, iconPath: ICONS.tools },
    { title: t("skills.groups.soft"), items: tx(SKILLS.soft), iconPath: ICONS.soft },
  ];

  return (
    <motion.section
      id="competences"
      className="px-4 sm:px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        <SectionIcon /> {t("sections.skills")}
      </h2>
      <p className="section-subtitle">{t("subtitles.skills")}</p>

      <div className="card mx-auto max-w-4xl py-0 px-5 sm:px-8">
        {rows.map((r, i) => (
          <SkillRow key={i} {...r} last={i === rows.length - 1} />
        ))}
      </div>
    </motion.section>
  );
}
