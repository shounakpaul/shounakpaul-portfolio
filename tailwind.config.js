/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "on-accent": "rgb(var(--color-on-accent) / <alpha-value>)",
        footer: "rgb(var(--color-footer) / <alpha-value>)",
        "footer-ink": "rgb(var(--color-footer-ink) / <alpha-value>)",
        "footer-muted": "rgb(var(--color-footer-muted) / <alpha-value>)",
        "footer-line": "rgb(var(--color-footer-line) / <alpha-value>)",
        "footer-accent": "rgb(var(--color-footer-accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1240px",
        measure: "65ch",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
