Project: Portfolio (React + Vite + Tailwind)

Short goal
 - This repository is a personal portfolio built with React (18), Vite, Tailwind CSS and a small Firebase hosting/deploy flow.

Key commands (dev / build / preview)
 - npm install
 - npm run dev        # starts Vite dev server
 - npm run build      # builds production assets (vite build)
 - npm run preview    # local preview of the built site
 - firebase deploy --only hosting  # used by author to publish site (not included in this repo)

Big-picture architecture and important files
 - Entrypoint: `index.jsx` / `main.jsx` (in `src/`) — mounts React app.
 - App shell: `src/App.jsx` composes the site using small presentational components in `src/components/` (Hero, About, Projects, Skills, Contact, Certifications, Footer, Navbar, ThemeToggle, LangSwitcher, BackToTop, etc.).
 - Contexts: `src/contexts/ThemeContext.jsx` and `src/contexts/LangContext.jsx` provide global theme and localization state. If components render nothing, check these providers for runtime errors.
 - Data: `src/data/data.js` keeps static content (projects, skills, certifications) consumed by components.
 - Styling: `src/index.css` (Tailwind + custom CSS variables). Tailwind is configured in `tailwind.config.js` and PostCSS via `postcss.config.cjs`.
 - Build tooling: Vite config in `vite.config.js`. React SWC plugin is used (`@vitejs/plugin-react-swc`).

Conventions & project-specific patterns
 - Components are small and mostly presentational. Many files export named or default components; check import style in `src/App.jsx` (mix of default and named imports). Example: `import About from "./components/About"` (default) vs `import { Hero } from "./components/Hero"` (named). Respect the declared exports — incorrect import form will throw at runtime and cause a blank page.
 - Context providers wrap the app in `App` (see `src/App.jsx`). If the app is blank, temporarily remove or mock `ThemeProvider` / `LangProvider` to check whether a provider throws during render.
 - CSS variables are used extensively (e.g., `--bg`, `--text`, `--heading`, `--accent-10`). `src/index.css` defines base variables like `--app-bg` / `--app-fg` — inspect these when colors appear wrong or content looks hidden.
 - Animations and motion: Framer Motion is used (dependency `framer-motion`). Look for `motion` components inside `src/components` (e.g., animated background in `Hero.jsx`). Animation code often generates particles with useMemo/useEffect — errors here can crash the render.

Debugging tips specific to this codebase
 - Blank page: open browser console — most likely causes are:
   - A component throws during render (check stack trace pointing to `src/components/*`).
   - Incorrect import/export (named vs default) — check `src/App.jsx` imports and the actual exports in components.
   - Error in a context provider (`src/contexts/*`) — comment them out to isolate.
 - Rapid isolation: inside `src/App.jsx` replace `<main>...</main>` with a simple node:
  Project: Portfolio (React + Vite + Tailwind)

  Short goal
   - This repository is a personal portfolio built with React (18), Vite, Tailwind CSS and a small Firebase hosting/deploy flow.

  Key commands (dev / build / preview)
   - npm install
   - npm run dev        # starts Vite dev server
   - npm run build      # builds production assets (vite build)
   - npm run preview    # local preview of the built site
   - firebase deploy --only hosting  # used by author to publish site (not included in this repo)

  Big-picture architecture and important files
   - Entrypoint: `index.jsx` / `main.jsx` (in `src/`) — mounts React app.
   - App shell: `src/App.jsx` composes the site using small presentational components in `src/components/` (Hero, About, Projects, Skills, Contact, Certifications, Footer, Navbar, ThemeToggle, LangSwitcher, BackToTop, etc.).
   - Contexts: `src/contexts/ThemeContext.jsx` and `src/contexts/LangContext.jsx` provide global theme and localization state. If components render nothing, check these providers for runtime errors.
   - Data: `src/data/data.js` keeps static content (projects, skills, certifications) consumed by components.
   - Styling: `src/index.css` (Tailwind + custom CSS variables). Tailwind is configured in `tailwind.config.js` and PostCSS via `postcss.config.cjs`.
   - Build tooling: Vite config in `vite.config.js`. React SWC plugin is used (`@vitejs/plugin-react-swc`).

  Conventions & project-specific patterns
   - Components are small and mostly presentational. Many files export named or default components; check import style in `src/App.jsx` (mix of default and named imports). Example: `import About from "./components/About"` (default) vs `import { Hero } from "./components/Hero"` (named). Respect the declared exports — incorrect import form will throw at runtime and cause a blank page.
   - Context providers wrap the app in `App` (see `src/App.jsx`). If the app is blank, temporarily remove or mock `ThemeProvider` / `LangProvider` to check whether a provider throws during render.
   - CSS variables are used extensively (e.g., `--bg`, `--text`, `--heading`, `--accent-10`). `src/index.css` defines base variables like `--app-bg` / `--app-fg` — inspect these when colors appear wrong or content looks hidden.
   - Animations and motion: Framer Motion is used (dependency `framer-motion`). Look for `motion` components inside `src/components` (e.g., animated background in `Hero.jsx`). Animation code often generates particles with useMemo/useEffect — errors here can crash the render.

  Debugging tips specific to this codebase
   - Blank page: open browser console — most likely causes are:
     - A component throws during render (check stack trace pointing to `src/components/*`).
     - Incorrect import/export (named vs default) — check `src/App.jsx` imports and the actual exports in components.
     - Error in a context provider (`src/contexts/*`) — comment them out to isolate.
   - Rapid isolation: inside `src/App.jsx` replace `<main>...</main>` with a simple node:
     <div>health-check</div>
     If that renders, add components back one-by-one to find the failing one.
   - CSS hiding content: `index.css` uses `:root` variables. Inspect computed styles for `body`, `.shell`, and the element with id "main" to ensure background/text colors contrast.

  Patterns & examples to follow when editing code
   - Keep components small and pure: prefer props and local state; global state lives in `contexts`.
   - Follow existing file export patterns. Example components:
     - `src/components/About.jsx` — default export
     - `src/components/Hero.jsx` — named export `Hero`
   - Use Tailwind utility classes alongside a few custom CSS classes in `src/index.css` (e.g., `.card`, `.btn`). Avoid adding global rules that conflict with these helpers.

  Integration points
   - Firebase hosting is referenced in `firebase.json` at repo root. The repository doesn't include Firebase service account credentials; deployment is performed locally by the author.
   - No backend API: static data from `src/data/data.js` is used. If you add dynamic integrations, document new endpoints and add fetch error handling.

  Files to check first when debugging or making changes
   - `src/App.jsx` — composition and providers
   - `src/contexts/ThemeContext.jsx`, `src/contexts/LangContext.jsx` — can block rendering
   - `src/components/Hero.jsx` — contains complex animation and useMemo hooks (common crash source)
   - `src/index.css`, `tailwind.config.js` — style and theme variables
   - `package.json` — scripts & dependencies

  How to run/tests
   - Local dev: `npm install` then `npm run dev` (Vite dev server).
   - Build: `npm run build` then `npm run preview` to locally preview the production build.

  When in doubt, ask the repo owner for the preferred export style of a component or the contents of environment-specific files (Firebase config), because some runtime failures are caused by mismatched exports or missing secrets.

  If you want me to expand this with code pointers (exact export lines or a checklist to debug runtime errors), say so and I will add short examples referencing the exact files.
