// vite.config.js (ESM)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: { sourcemap: true }, // pour déboguer en prod si besoin
});