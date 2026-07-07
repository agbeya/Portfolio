import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SITE, HERO, STATUS, METRICS } from "../data/data";
import TechSlider from "./TechSlider";
import { useLang } from "../contexts/LangContext";

/** --------- Fond animé (réseau de nœuds — clin d'œil GenAI/data) ---------- */
function BackgroundFX() {
  // Nœuds générés une seule fois, positions en % (viewBox 0..100)
  const { nodes, edges } = useMemo(() => {
    const COUNT = 26;
    const pts = Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: 0.5 + Math.random() * 0.7,
      pulseDur: 3 + Math.random() * 4,
      pulseDelay: Math.random() * -6,
    }));

    // Relie chaque nœud à son plus proche voisin (dans une distance max) → look "constellation" sobre
    const MAX_DIST = 22;
    const links = [];
    pts.forEach((a, i) => {
      let best = null;
      let bestDist = Infinity;
      pts.forEach((b, j) => {
        if (i === j) return;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < bestDist) {
          bestDist = d;
          best = j;
        }
      });
      if (best !== null && bestDist < MAX_DIST) {
        const key = i < best ? `${i}-${best}` : `${best}-${i}`;
        if (!links.some((l) => l.key === key)) {
          links.push({ key, a: pts[i], b: pts[best] });
        }
      }
    });

    return { nodes: pts, edges: links };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hero-bg">
      {/* léger dégradé radial */}
      <div className="absolute inset-0 mix-blend-soft-light opacity-[0.35] bg-[radial-gradient(60%_40%_at_50%_40%,var(--accent-10),transparent_70%)]" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ color: "var(--accent)" }}
        aria-hidden
      >
        {edges.map((e) => (
          <line
            key={e.key}
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            stroke="currentColor"
            strokeOpacity={0.12}
            strokeWidth={0.12}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {nodes.map((n) => (
          <motion.circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="currentColor"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.55, 0.15] }}
            transition={{
              duration: n.pulseDur,
              delay: n.pulseDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/** --------------------------------------------------- */

export function Hero() {
  const { t, lang } = useLang();
  const tx = (v) => (typeof v === "object" && v !== null ? v[lang] ?? v.fr ?? "" : v ?? "");
  const texts = t("hero.rotating", []);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % texts.length), 3000);
    return () => clearInterval(timer);
  }, [texts?.length]);

  const goTo = (e, sel) => {
    e.preventDefault();
    const target = document.querySelector(sel);
    if (!target) return;
    const smt = parseInt(getComputedStyle(target).scrollMarginTop || "0", 10);
    const y = target.getBoundingClientRect().top + window.pageYOffset - (Number.isNaN(smt) ? 112 : smt);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="top" className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 pt-28 pb-10 overflow-hidden">
      {/* Fond animé */}
      <BackgroundFX />

      {/* Avatar */}
      <motion.img
        src={HERO.img}
        alt="profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6"
        style={{ borderWidth: 4, borderStyle: "solid", borderColor: "var(--accent)", boxShadow: "0 12px 40px var(--accent-20)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Badge de statut */}
      {STATUS && (
        <motion.div
          className="pill mb-4 text-sm"
          style={{ borderColor: "var(--accent-20)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "#22c55e" }}
            aria-hidden
          >
            <span
              className="absolute inline-flex h-full w-full rounded-full animate-ping"
              style={{ background: "#22c55e", opacity: 0.6 }}
            />
          </span>
          {tx(STATUS)}
        </motion.div>
      )}

      {/* Nom */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        style={{ color: "var(--heading)" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {SITE.name}
      </motion.h1>

      {/* Texte rotatif */}
      {texts?.length > 0 && (
        <motion.div
          key={index}
          className="mt-3 text-lg h-6 overflow-hidden"
          style={{ color: "var(--accent)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {texts[index]}
        </motion.div>
      )}

      {/* Pitch */}
      <motion.p
        className="mt-3 text-lg max-w-xl"
        style={{ color: "color-mix(in srgb, var(--text) 90%, transparent)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {t("hero.pitch", HERO.short)}
      </motion.p>

      {/* Boutons */}
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href={SITE.linkedin}
          className="px-5 py-2 rounded-full border transition"
          style={{ borderColor: "var(--accent)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-20)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          target="_blank"
          rel="noreferrer"
        >
          {t("hero.ctas.linkedin")}
        </a>
        <a
          href={SITE.github}
          className="px-5 py-2 rounded-full border transition"
          style={{ borderColor: "var(--border)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "color-mix(in srgb, var(--text) 6%, transparent)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          target="_blank"
          rel="noreferrer"
        >
          {t("hero.ctas.github")}
        </a>
        <a
          href="#contact"
          onClick={(e) => goTo(e, "#contact")}
          className="px-5 py-2 rounded-full border transition"
          style={{ borderColor: "var(--border)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "color-mix(in srgb, var(--text) 6%, transparent)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          {t("hero.ctas.contact")}
        </a>
      </motion.div>

      {/* Bandeau de metrics */}
      {Array.isArray(METRICS) && METRICS.length > 0 && (
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {METRICS.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold" style={{ color: "var(--accent)" }}>
                {m.value}
              </div>
              <div className="muted text-xs sm:text-sm max-w-[9rem]">{tx(m.label)}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Slider outils/langages/frameworks */}
      <TechSlider />
    </section>
  );
}
