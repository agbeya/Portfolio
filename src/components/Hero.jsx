import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SITE, HERO } from "../data/data";
import TechSlider from "./TechSlider";
import { useLang } from "../contexts/LangContext";

/** --------- Fond animé (icônes flottantes) ---------- */
function BackgroundFX() {
  // Quelques icônes SVG “légères”
  const ICONS = useMemo(
    () => [
      // code </>
      (props) => (
        <svg viewBox="0 0 24 24" {...props}><path d="M9 9l-3 3 3 3M15 9l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
      ),
      // cloud
      (props) => (
        <svg viewBox="0 0 24 24" {...props}><path d="M7 18h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6 10a4 4 0 0 0 1 8z" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
      ),
      // database
      (props) => (
        <svg viewBox="0 0 24 24" {...props}><ellipse cx="12" cy="5" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
      ),
      // sparkle / star
      (props) => (
        <svg viewBox="0 0 24 24" {...props}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
      ),
      // chart bars
      (props) => (
        <svg viewBox="0 0 24 24" {...props}><path d="M5 19V9M10 19V5M15 19v-7M20 19V8" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg>
      ),
    ],
    []
  );

  // On “génère” des particules une seule fois
  const items = useMemo(() => {
    const arr = [];
    const COUNT = 16; // assez pour être vivant mais léger
    for (let i = 0; i < COUNT; i++) {
      const Icon = ICONS[i % ICONS.length];
      arr.push({
        id: i,
        Icon,
        left: Math.random() * 100,          // en %
        top: Math.random() * 100,           // en %
        size: 28 + Math.random() * 22,      // px
        rotate: Math.random() * 360,        // deg
        drift: 12 + Math.random() * 22,     // amplitude px
        dur: 9 + Math.random() * 9,         // s
        delay: Math.random() * -12,         // s (décalage)
        opacity: 0.12 + Math.random() * 0.12,
      });
    }
    return arr;
  }, [ICONS]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hero-bg">
      {/* léger dégradé radiale + grain très soft */}
      <div className="absolute inset-0 mix-blend-soft-light opacity-[0.35] bg-[radial-gradient(60%_40%_at_50%_40%,var(--accent-10),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(0deg,transparent_0,transparent_2px,rgba(0,0,0,.04)_3px,transparent_4px)]" />

      {/* Icônes animées */}
      {items.map((p) => (
        <motion.div
          key={p.id}
          className="fx-icon"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            color: "var(--heading)",        // s’adapte au thème
            transform: `translate(-50%,-50%) rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 2px 10px var(--accent-10)) blur(0.2px)",
          }}
          aria-hidden
          initial={{ y: 0 }}
          animate={{
            y: [0, -p.drift, 0, p.drift, 0],
            x: [0, p.drift / 2, 0, -p.drift / 2, 0],
            rotate: [p.rotate, p.rotate + 12, p.rotate],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p.Icon width={p.size} height={p.size} />
        </motion.div>
      ))}
    </div>
  );
}

/** --------------------------------------------------- */

export function Hero() {
  const { t } = useLang();
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
    <section id="top" className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden">
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

      {/* Slider outils/langages/frameworks */}
      <TechSlider />
    </section>
  );
}
