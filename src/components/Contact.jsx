import React from "react";
import { motion } from "framer-motion";
import { SITE } from "../data/data";
import { useLang } from "../contexts/LangContext";

/* Icônes rapides */
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6.5 6.5h.01M4 4h5v16H4zM11 10h5a2 2 0 0 1 2 2v8h-5v-7a1 1 0 0 0-1-1h-1v8H11z" />
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 3.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-8 0C3.27.65 2.09 1 2.09 1A5.07 5.07 0 0 0 2 3.77 5.44 5.44 0 0 0 .5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6 17.13V21" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 7.18 2 2 0 0 1 5 5h3.09a1 1 0 0 1 1 .75l1.1 4.4a1 1 0 0 1-.29.98l-1.7 1.7a16 16 0 0 0 6.86 6.86l1.7-1.7a1 1 0 0 1 .98-.29l4.4 1.1a1 1 0 0 1 .75 1z" />
  </svg>
);

function SectionIcon() {
  return (
    <span className="secicon mr-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 9a7 7 0 0 1 14 0" />
      </svg>
    </span>
  );
}

function SocialCard({ href, icon: Icon, title, subtitle, className = "" }) {
  return (
    <a
      href={href}
      className={`card card-hover flex flex-col items-center justify-center gap-2 text-center p-6 ${className}`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon />
      <div className="text-lg font-semibold" style={{ color: "var(--heading)" }}>
        {title}
      </div>
      <div className="muted text-sm">{subtitle}</div>
    </a>
  );
}

/* === Carte de téléchargement (PDF statique depuis /public) === */
function DownloadIconCircle() {
  return (
    <span
      className="inline-flex h-14 w-14 items-center justify-center rounded-full border mb-5"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 21h16" />
      </svg>
    </span>
  );
}

/* Util : construit l'URL du PDF selon la langue, avec fallback FR */
function getResumeHref(lang) {
  const isFr = (lang || "fr").toLowerCase().startsWith("fr");
  // fichiers à placer dans /public : CV_AGBONON_Fr.pdf et CV_AGBONON_En.pdf
  return isFr ? "/CV_AGBONON_Fr.pdf" : "/CV_AGBONON_En.pdf";
}

export function Contact() {
  const { t, lang } = useLang?.() || { t: (k, d) => d, lang: "fr" };
  const resumeHref = getResumeHref(lang);
  const resumeMeta = (lang || "fr").toLowerCase().startsWith("fr") ? "PDF • Français" : "PDF • English";

  return (
    <motion.section
      id="contact"
      className="px-8 py-14 text-center scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
        <SectionIcon /> {t("sections.contact")}
      </h2>
      <p className="muted max-w-2xl mx-auto -mt-4 mb-10">{t("contact.lead")}</p>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="sm:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialCard href={SITE.linkedin} icon={IconLinkedIn} title="LinkedIn" subtitle={t("contact.linkedin")} className="h-44" />
          <SocialCard href={SITE.github} icon={IconGitHub} title="GitHub" subtitle={t("contact.github")} className="h-44" />
          <SocialCard href={`mailto:${SITE.email}`} icon={IconMail} title={t("contact.email")} subtitle={SITE.email} className="h-44" />
          <SocialCard href={`tel:${SITE.phone.replace(/\s+/g, "")}`} icon={IconPhone} title={t("contact.phone")} subtitle={SITE.phone} className="h-44" />
        </div>

        {/* Carte de téléchargement : simple <a> vers le PDF public */}
        <a
          href={resumeHref}
          download
          target="_blank"
          rel="noreferrer"
          className="card card-hover sm:col-span-1 sm:row-span-2 sm:h-[calc(22rem+1.5rem)] flex flex-col items-center justify-center text-center p-8 md:p-10"
        >
          <div className="w-full max-w-[28rem] mx-auto flex flex-col items-center">
            <DownloadIconCircle />
            <h3 className="text-2xl md:text-3xl leading-tight" style={{ color: "var(--heading)" }}>
              {t("contact.cv_title", "Télécharger mon CV (PDF)")}
            </h3>
            <p className="muted mt-3">{t("contact.cv_sub", "Version prête à l’emploi.")}</p>
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 border"
              style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--text) 6%, transparent)" }}
            >
              <span className="text-sm font-medium">{t("contact.cv_btn", "Télécharger")}</span>
            </div>
            <span className="muted text-xs mt-6">{t("contact.cv_meta", resumeMeta)}</span>
          </div>
        </a>
      </div>
    </motion.section>
  );
}
