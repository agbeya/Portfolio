// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/data";
import { useLang } from "../contexts/LangContext";

/* ====== Icône du titre ====== */
function SectionIcon() {
  return (
    <span className="secicon mr-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 15l-2 6 6-2 9-9a3 3 0 1 0-4-4L5 15z" />
        <path d="M15 9l-6 6" />
      </svg>
    </span>
  );
}

/* ====== Bouton 'Voir' ====== */
function ViewBtn({ href, children }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="btn-outline-accent mt-4">
      {children}
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 17L17 7M17 7h-7M17 7v7" />
      </svg>
    </a>
  );
}

/* ====== Providers de screenshots + helpers ======
   Ordre par défaut : Microlink → WordPress mShots → Thum.io
   Modifiable via .env : VITE_SCREENSHOT_PROVIDERS=microlink,thum,mshots
*/
const PREFERRED = (import.meta.env.VITE_SCREENSHOT_PROVIDERS || "microlink,mshots,thum")
  .split(",")
  .map((s) => s.trim());

function microlinkSrc(url) {
  return `https://api.microlink.io/?screenshot=true&meta=false&embed=screenshot.url&url=${encodeURIComponent(
    url
  )}&wait=1500&viewport.width=1280&viewport.height=800`;
}
function mshotsSrc(url) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280`;
}
function thumSrc(url) {
  const base =
    import.meta.env.VITE_SCREENSHOT_BASE ||
    "https://image.thum.io/get/width/1280/crop/780/noanimate/";
  return `${base}${encodeURIComponent(url)}`;
}
function buildSources(url) {
  const map = { microlink: microlinkSrc(url), mshots: mshotsSrc(url), thum: thumSrc(url) };
  const ordered = PREFERRED.map((k) => map[k]).filter(Boolean);
  return Array.from(new Set(ordered));
}

/* ====== Fallback si capture indisponible ====== */
function FallbackBanner({ url, t }) {
  const domain = (() => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  })();
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[var(--card-bg)] to-[var(--accent-20)]">
      <div className="text-center">
        <div
          className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border"
          style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
          </svg>
        </div>
        <p className="text-sm muted">{t("projects.preview_unavailable", "Aperçu indisponible")}</p>
        <p className="text-sm" style={{ color: "var(--heading)" }}>{domain}</p>
      </div>
    </div>
  );
}

/* ====== Vignette Preview (auto bascule de source) ====== */
function Preview({ url, alt, manual, t }) {
  const [idx, setIdx] = useState(0);
  const [error, setError] = useState(false);
  const srcs = manual ? [manual] : buildSources(url);

  const onImgError = () => {
    if (idx < srcs.length - 1) setIdx((i) => i + 1);
    else setError(true);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border" style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}>
      <div className="aspect-[16/9] w-full">
        {!error ? (
          <img
            src={srcs[idx]}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={onImgError}
          />
        ) : (
          <FallbackBanner url={url} t={t} />
        )}
      </div>

      {/* Badge domaine + favicon */}
      <div
        className="pointer-events-none absolute right-2 top-2 flex items-center gap-2 rounded-full border px-2 py-1 text-xs"
        style={{ background: "var(--pill-bg)", borderColor: "var(--border)" }}
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=64`}
          alt=""
          className="h-4 w-4 rounded"
          loading="lazy"
        />
        <span className="muted max-w-[12rem] truncate">
          {(() => {
            try {
              return new URL(url).hostname.replace("www.", "");
            } catch {
              return "site";
            }
          })()}
        </span>
      </div>
    </div>
  );
}

/* ====== Petite icône dans la card ====== */
function CardIcon() {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
      </svg>
    </span>
  );
}

/* ====== Composant principal ====== */
export default function Projects() {
  const { t, lang } = useLang();

  // Helper pour lire un champ bilingue ou une string simple
  const tx = (v) => (typeof v === "string" ? v : v?.[lang] ?? v?.fr ?? v?.en ?? "");

  return (
    <motion.section
      id="projects"
      className="px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        <SectionIcon /> {t("sections.projects")}
      </h2>
      <p className="section-subtitle">
        {t("subtitles.projects", "Sélection de projets pros et personnels.")}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={i}
            className="group relative card card-hover will-change-transform overflow-hidden"
            whileHover={{ y: -3 }}
          >
            {/* aperçu */}
            {p.link && <Preview url={p.link} alt={tx(p.name)} manual={p.preview} t={t} />}

            {/* contenu */}
            <div className="mt-4">
              <CardIcon />
              <h3 className="mt-3 text-lg" style={{ color: "var(--heading)" }}>
                {tx(p.name)}
              </h3>
              <p className="mt-2 body90 leading-relaxed">{tx(p.desc)}</p>

              {Array.isArray(p.tags) && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag, k) => (
                    <span key={k} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                <ViewBtn href={p.link}>{t("projects.view", "Voir le projet")}</ViewBtn>
                {p.github && <ViewBtn href={p.github}>{t("projects.github", "GitHub")}</ViewBtn>}
                {p.demo && <ViewBtn href={p.demo}>{t("projects.demo", "Démo")}</ViewBtn>}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-[var(--accent-20)] transition" />
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
