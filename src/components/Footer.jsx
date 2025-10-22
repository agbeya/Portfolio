import React from "react";
import { SITE } from "../data/data";

export function Footer() {
  return (
    <footer className="mt-12 py-8 text-center border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-violet-400" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span className="opacity-40">•</span>
            <a className="hover:text-violet-400" href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
