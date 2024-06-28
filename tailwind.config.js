/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "frost-light-shade": "#f5f5f5",
        "frost-dark-shade": "#1e1e1e",
        "frost-lighter-shade": "#e0e0e0",
        "frost-darker-shade": "#2e2e2e",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
