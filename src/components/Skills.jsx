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

function Chip({ children }) {
  return <motion.span className="chip" whileHover={{ scale: 1.07 }}>{children}</motion.span>;
}

function CardDeco({ path }) {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to left, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 60%)" }}
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-36 w-36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        style={{ opacity: 0.12, color: "var(--accent-10)" }}
      >
        <path d={path} />
      </svg>
    </div>
  );
}

function SkillCard({ title, items, decoPath }) {
  return (
    <div className="card relative overflow-hidden">
      <CardDeco path={decoPath} />
      <p className="text-sm muted mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((s, i) => <Chip key={i}>{s}</Chip>)}
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
    languages: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z",
    processing: "M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4",
    cloudDw: "M3 15a4 4 0 014-4 6 6 0 1111 3h2a3 3 0 010 6H6a3 3 0 01-3-5z",
    etl: "M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7zM4 13h7v7H4z",
    db: "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2v12c0 1.1-3.6 2-8 2s-8-.9-8-2V6zM4 6c0 1.1 3.6 2 8 2s8-.9 8-2",
    chart: "M4 20V10m6 10V4m6 16v-6m4 6V8",
    tools: "M14 7a5 5 0 11-7 7L3 21l7-4a5 5 0 104-10z",
  };

  return (
    <motion.section
      id="competences"        
      className="px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        <SectionIcon /> {t("sections.skills")}
      </h2>
      <p className="section-subtitle">{t("subtitles.skills")}</p>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="grid gap-5">
          <SkillCard title={t("skills.groups.languages")} items={SKILLS.languages} decoPath={ICONS.languages} />
          <SkillCard title={t("skills.groups.processing")} items={SKILLS.data_processing} decoPath={ICONS.processing} />
          <SkillCard title={t("skills.groups.cloudDw")} items={SKILLS.cloud_dw} decoPath={ICONS.cloudDw} />
        </div>

        <div className="grid gap-5">
          <SkillCard title={t("skills.groups.etl")} items={SKILLS.etl_orchestration} decoPath={ICONS.etl} />
          <SkillCard title={t("skills.groups.db")} items={SKILLS.databases} decoPath={ICONS.db} />
          <div className="grid gap-5 sm:grid-cols-2">
            <SkillCard title={t("skills.groups.bi")} items={SKILLS.bi_analytics} decoPath={ICONS.chart} />
            <SkillCard title={t("skills.groups.devops")} items={SKILLS.devops_tools} decoPath={ICONS.tools} />
          </div>
        </div>
      </div>

      <div className="mt-5 card relative overflow-hidden">
        <CardDeco path={ICONS.tools} />
        <p className="text-sm muted mb-3">{t("skills.groups.soft")}</p>
        <div className="flex flex-wrap gap-2">
          {tx(SKILLS.soft).map((s, i) => <Chip key={i}>{s}</Chip>)}
        </div>
      </div>
    </motion.section>
  );
}
