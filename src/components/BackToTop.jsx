import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="backtotop"
          onClick={goTop}
          aria-label="Revenir en haut"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border flex items-center justify-center backdrop-blur-md shadow-lg hover:-translate-y-0.5 transition focus:outline-none"
          style={{
            background: "var(--pill-bg)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* flèche ↑ */}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 5v14M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
