// src/components/Certifications.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATES } from "../data/data";
import { useLang } from "../contexts/LangContext";

/* Icône de section */
function SectionIcon() {
  return (
    <span className="secicon mr-2" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3 6 6 .9-4.5 4.4 1.1 6.3L12 17l-5.6 2.6 1.1-6.3L3 8.9 9 8l3-6z" />
      </svg>
    </span>
  );
}

/* Fallback visuel si l’image n’est pas trouvée */
function BadgeFallback() {
  return (
    <div
      className="flex items-center justify-center rounded-xl"
      style={{
        width: 88,
        height: 88,
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        color: "var(--accent)",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    </div>
  );
}

/* Carte individuelle */
function CertCard({ item, t }) {
  const [err, setErr] = useState(false);
  return (
    <div className="card card-hover h-full flex gap-4 items-center">
      {!item.path || err ? (
        <BadgeFallback />
      ) : (
        <img
          src={item.path}
          alt={`${item.short || item.name} badge`}
          className="rounded-xl object-contain"
          style={{ width: 88, height: 88, border: "1px solid var(--border)", background: "var(--card-bg)", padding: 8 }}
          onError={() => setErr(true)}
        />
      )}

      <div className="min-w-0">
        <div className="text-base" style={{ color: "var(--heading)" }}>
          {item.name}
          {item.short ? ` • ${item.short}` : ""}
        </div>

        {/* “Délivré par …” localisé */}
        {item.issuer && (
          <div className="muted text-sm mt-0.5">
            {t("certs.issued_by", "Délivré par")}: {item.issuer}
          </div>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm mt-2 rounded-full px-3 py-1 border"
            style={{ borderColor: "var(--border)" }}
          >
            {t("certs.view_badge", "Voir le badge")}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M7 17L17 7M17 7h-7M17 7v7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export function Certifications() {
  const { t, lang } = useLang();
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  // Responsive: 1 / 2 / 3 cartes
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Regroupe les certificats par "slide"
  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < CERTIFICATES.length; i += perView) {
      chunks.push(CERTIFICATES.slice(i, i + perView));
    }
    return chunks.length ? chunks : [[]];
  }, [perView]);

  const clampIndex = (i) => {
    if (i < 0) return slides.length - 1;
    if (i >= slides.length) return 0;
    return i;
  };
  const go = (d) => setIndex((i) => clampIndex(i + d));
  const goto = (i) => setIndex(clampIndex(i));

  // Autoplay (5s) — respect prefers-reduced-motion
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const reduce = m?.matches;
    if (reduce || paused || slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => clampIndex(i + 1)), 5000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  // Pause au survol
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const ofLabel = lang === "fr" ? "sur" : "of";
  const prevLabel = lang === "fr" ? "Précédent" : "Previous";
  const nextLabel = lang === "fr" ? "Suivant" : "Next";

  return (
    <motion.section
      id="certifications"
      className="px-8 py-14 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        <SectionIcon /> {t("sections.certifications")}
      </h2>

      <p className="section-subtitle">{t("subtitles.certifications")}</p>

      <div
        className="relative"
        ref={containerRef}
        aria-roledescription="carousel"
        aria-label={t("sections.certifications")}
      >
  <div className="overflow-x-hidden overflow-y-visible pt-3">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translate3d(-${index * 100}%,0,0)` }}
          >
            {slides.map((group, gi) => (
              <div
                key={gi}
                className="w-full flex-shrink-0 px-1 sm:px-2"
                role="group"
                aria-label={`Slide ${gi + 1} ${ofLabel} ${slides.length}`}
              >
                <div
                  className={
                    perView === 1
                      ? "grid grid-cols-1 gap-4"
                      : perView === 2
                      ? "grid grid-cols-2 gap-4"
                      : "grid grid-cols-3 gap-4"
                  }
                >
                  {group.map((c, i) => (
                    <CertCard key={`${gi}-${i}`} item={c} t={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* commandes */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="rounded-full border px-3 py-2"
              style={{ borderColor: "var(--border)" }}
              aria-label={prevLabel}
              title={prevLabel}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="rounded-full border px-3 py-2"
              style={{ borderColor: "var(--border)" }}
              aria-label={nextLabel}
              title={nextLabel}
            >
              →
            </button>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goto(i)}
                aria-label={`${lang === "fr" ? "Aller au slide" : "Go to slide"} ${i + 1}`}
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  background:
                    i === index
                      ? "var(--accent)"
                      : "color-mix(in srgb, var(--text) 20%, transparent)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
