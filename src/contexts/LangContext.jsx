// src/contexts/LangContext.jsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

/** ================= Dictionnaires =================
 * - Ajoute d'autres langues en copiant la structure.
 * - Toutes les clés sont organisées par page/section.
 */
const translations = {
  fr: {
    // Barre de nav + intitulés de sections
    nav: {
      about: "À propos",
      exp: "Expériences",
      projects: "Projets",
      skills: "Compétences",
      certifications: "Certifications",
      contact: "Contact",
    },
    sections: {
      about: "À propos",
      experiences: "Expériences",
      projects: "Projets",
      skills: "Compétences",
      certifications: "Certifications",
      contact: "Contact",
    },
    // Sous-titres (affichés sous chaque h2)
    subtitles: {
      about:
        "Quelques mots sur mon parcours et ce qui me motive.",
      experiences:
        "Missions clés, contexte et stacks mises en œuvre.",
      projects:
        "Sélection de projets pros et personnels.",
      skills:
        "Compétences techniques et outils utilisés au quotidien.",
      certifications:
        "Badges et validations officielles.",
      contact:
        "Entrons en contact et construisons quelque chose de génial ensemble.",
    },

    // HERO
    hero: {
      rotating: [
        "Data Engineer | Data Scientist | Software Engineer",
        "Data Engineer chez Avanade",
        "Passionné de Tech, Data & IA",
      ],
      // Optionnel : mets un texte ici si tu veux surcharger HERO.short dans data.js
      // pitch: "Ingénieur Big Data & Machine Learning, spécialisé PySpark, Azure et Snowflake.",
      ctas: { linkedin: "LinkedIn", github: "GitHub", contact: "Contact" },
    },

    // ABOUT (si tu veux des labels spécifiques)
    about: {
      lead:
        "Quelques mots sur mon parcours et ce qui me motive.",
      highlights: "Points clés",
      highlight1: "Ingénierie des données (ETL/ELT), qualité & industrialisation",
      highlight2: "Culture produit, pragmatisme et sens de l'impact",
      highlight3: "Collaboration, mentoring et documentation claire",
    },

    // EXPERIENCES
    exp: {
      lead:
        "Missions clés, contexte et stacks mises en œuvre.",
      stack_label: "Technologies",
    },

    // PROJECTS
    projects: {
      lead: "Sélection de projets pros et personnels.",
      view: "Voir le projet",
      github: "GitHub",
      demo: "Démo",
      preview_unavailable: "Aperçu indisponible",
    },

    // SKILLS
    skills: {
      lead: "Compétences techniques et outils utilisés au quotidien.",
      groups: {
        languages: "Langages & Query",
        processing: "Big Data & Processing",
        cloudDw: "Cloud & Data Warehousing",
        etl: "ETL / Orchestration",
        db: "Bases de données",
        bi: "BI & Analytics",
        devops: "DevOps & Outils",
        soft: "Soft skills",
      },
    },

    // CERTIFICATIONS
    certs: {
      lead: "Badges et validations officielles.",
      issued_by: "Délivré par",
      view_badge: "Voir le badge",
      more: "Voir plus",
      less: "Voir moins",
    },

    // CONTACT
    contact: {
      lead:
        "Entrons en contact et construisons quelque chose de génial ensemble.",
      linkedin: "Réseau pro",
      github: "Dépôts & projets",
      email: "Email",
      phone: "Téléphone",
      cv_title: "Besoin d’un document imprimable ?",
      cv_sub: "Cliquez pour télécharger",
      cv_btn: "Télécharger le CV",
      cv_meta: "PDF • Français",
      cv_filename: "CV_AGBONON_Fr.pdf",
      cv_filename_en: "CV_AGBONON_En.pdf",
    },

    // Accessibilité / UI générique
    a11y: {
      theme_toggle: "Basculer thème clair/sombre",
      lang_toggle: "Changer de langue",
      pause_anim: "Mettre en pause l’animation",
      play_anim: "Relancer l’animation",
      back_to_top: "Revenir en haut de page",
    },
  },

  en: {
    nav: {
      about: "About",
      exp: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
    sections: {
      about: "About",
      experiences: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
    subtitles: {
      about:
        "A quick overview of my background and what motivates me.",
      experiences:
        "Key missions, context and the stacks I’ve used.",
      projects:
        "Selected professional and personal projects.",
      skills:
        "Technical skills and tools I use day-to-day.",
      certifications:
        "Official badges and validations.",
      contact:
        "Let’s connect and build something great together.",
    },

    hero: {
      rotating: [
        "Data Engineer | Data Scientist | Software Engineer",
        "Data Engineer at Avanade",
        "Passionate about Tech, Data & AI",
      ],
      // pitch: "Big Data & Machine Learning engineer, specialized in PySpark, Azure and Snowflake.",
      ctas: { linkedin: "LinkedIn", github: "GitHub", contact: "Contact" },
    },

    about: {
      lead: "A quick overview of my background and what motivates me.",
      highlights: "Highlights",
      highlight1: "Data engineering (ETL/ELT), quality & industrialization",
      highlight2: "Product culture, pragmatism and impact-driven mindset",
      highlight3: "Collaboration, mentoring and clear documentation",
    },

    exp: {
      lead: "Key missions, context and the stacks I’ve used.",
      stack_label: "Technologies",
    },

    projects: {
      lead: "Selected professional and personal projects.",
      view: "View project",
      github: "GitHub",
      demo: "Live demo",
      preview_unavailable: "Preview unavailable",
    },

    skills: {
      lead: "Technical skills and tools I use day-to-day.",
      groups: {
        languages: "Languages & Query",
        processing: "Big Data & Processing",
        cloudDw: "Cloud & Data Warehousing",
        etl: "ETL / Orchestration",
        db: "Databases",
        bi: "BI & Analytics",
        devops: "DevOps & Tools",
        soft: "Soft skills",
      },
    },

    certs: {
      lead: "Official badges and validations.",
      issued_by: "Issued by",
      view_badge: "View badge",
      more: "Show more",
      less: "Show less",
    },

    contact: {
      lead: "Let’s connect and build something great together.",
      linkedin: "Professional network",
      github: "Repositories & projects",
      email: "Email",
      phone: "Phone",
      cv_title: "Need a printable document?",
      cv_sub: "Click to download",
      cv_btn: "Download resume",
      cv_meta: "PDF • English",
      cv_filename: "CV_AGBONON_En.pdf",
      cv_filename_en: "CV_AGBONON_En.pdf",
    },

    a11y: {
      theme_toggle: "Toggle light/dark theme",
      lang_toggle: "Change language",
      pause_anim: "Pause animation",
      play_anim: "Resume animation",
      back_to_top: "Back to top",
    },
  },
};

/** ================ Contexte & Hook ================ */
const LangCtx = createContext({
  lang: "fr",
  setLang: () => {},
  toggleLang: () => {},
  t: (k, fallback) => fallback ?? k,
});

/** Récupère la langue initiale : localStorage → navigateur → fr */
function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
  } catch {}
  const nav = (typeof navigator !== "undefined" && navigator.language) || "fr";
  const n = String(nav).toLowerCase();
  if (n.startsWith("en")) return "en";
  if (n.startsWith("fr")) return "fr";
  // fallback
  return "fr";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  /** t('a.b.c', fallback) — deep get avec fallback */
  const t = useMemo(() => {
    const resolve = (v) => {
      if (v == null) return undefined;
      if (Array.isArray(v)) return v;
      if (typeof v === "object") return v[lang] ?? v.fr ?? v.en ?? undefined;
      return v;
    };

    return (key, fallback) => {
      const dict = translations[lang] || translations.fr;
      const raw = key
        .split(".")
        .reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), dict);
      const val = resolve(raw);
      if (val !== undefined) return val;
      const fb = resolve(fallback);
      return fb ?? key;
    };
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "fr" ? "en" : "fr")),
      t,
    }),
    [lang, t]
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
