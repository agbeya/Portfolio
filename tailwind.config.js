// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ active le mode sombre via la classe .dark sur <html>
  content: {
    files: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
    safelist: [
      'min-h-screen','inline-flex','flex','items-center','justify-center','text-center','gap-1','gap-2','gap-3','gap-4','gap-5','gap-6','gap-8','rounded-full','rounded-2xl','border','transition','px-3','py-1','py-1.5','px-1','px-2','px-4','p-5','p-4','text-sm','mx-auto'
    ],
  },
  theme: {
    extend: {
      // (optionnel) utilises ceci si tu veux des ombres/anneaux plus doux plus tard
      boxShadow: {
        'card': '0 6px 20px rgba(0,0,0,0.25)',
      },
      ringColor: {
        violetsoft: 'rgba(124, 58, 237, 0.3)', // ring-violet-600/30-like
      },
    },
  },
  
  plugins: [],
}
