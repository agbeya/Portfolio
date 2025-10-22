// src/App.jsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import LangSwitcher from "./components/LangSwitcher";
import BackToTop from "./components/BackToTop";
import { Certifications } from "./components/Certifications"; // <- export nommé
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider } from "./contexts/LangContext";
import "./index.css";

function AppShell() {
  return (
    <div
      id="top"
      className="shell min-h-screen bg-[var(--bg)] text-[var(--text)] scroll-smooth"
    >
      {/* Lien d'évitement clavier */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-[var(--card-bg)] text-[var(--text)] border px-3 py-2 rounded"
        style={{ borderColor: "var(--border)" }}
      >
        Aller au contenu principal
      </a>

      <Navbar />

      <header role="banner" className="pt-20 sm:pt-0">
        <Hero />
      </header>

      <main id="main" role="main" tabIndex={-1} className="max-w-7xl mx-auto px-4 md:px-6">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Boutons flottants */}
      <ThemeToggle />
      <LangSwitcher />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppShell />
      </LangProvider>
    </ThemeProvider>
  );
}
