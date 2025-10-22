import React from "react";
import { motion } from "framer-motion";
import { HERO } from "../data/data";
import { useLang } from "../contexts/LangContext";

export function Navbar() {
  const { t } = useLang();

  const leftLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.exp"), href: "#experiences" },
    { label: t("nav.projects"), href: "#projects" },
  ];
  const rightLinks = [
    { label: t("nav.skills"), href: "#competences" },
    { label: t("nav.certifications"), href: "#certifications" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href === "body" ? "body" : href);
    if (!target) return;
    const smt = parseInt(getComputedStyle(target).scrollMarginTop || "0", 10);
    const y = target.getBoundingClientRect().top + window.pageYOffset - (Number.isNaN(smt) ? 112 : smt);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
  <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center"
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-4xl w-full px-4 flex items-center justify-center relative">
        <div className="pill w-full flex items-center sm:justify-between justify-center px-4">
          <div className="hidden sm:flex items-center gap-6">
          {leftLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-gray-500 dark:text-gray-300 hover:text-inherit transition">
              {l.label}
            </a>
          ))}
          </div>

          <a
            href="#top"
            onClick={(e)=>handleNav(e,"body")}
            className="shrink-0 block rounded-full p-1 ring-1"
            style={{ ringColor: "var(--border)" }}
            title="Home"
          >
            <img src={HERO.img} alt="profile" className="h-9 w-9 rounded-full object-cover" />
          </a>

          <div className="hidden sm:flex items-center gap-6">
          {rightLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-gray-500 dark:text-gray-300 hover:text-inherit transition">
              {l.label}
            </a>
          ))}
          </div>

        {/* Mobile menu: full-width row below the pill to ensure tappable links and avoid overlap */}
        <div className="sm:hidden absolute left-0 right-0 top-full mt-3 px-4">
          <div className="w-full bg-[var(--pill-bg)]/80 backdrop-blur-md rounded-full py-2 flex items-center justify-between overflow-x-auto gap-2 px-3 shadow-sm z-40">
            {[...leftLinks, ...rightLinks].map((l) => (
              <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-gray-500 dark:text-gray-300 hover:text-inherit transition text-sm whitespace-nowrap px-3 py-2 rounded-full">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </motion.nav>
  );
}
