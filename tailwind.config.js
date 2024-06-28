/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "frost-light-shade": "#f5f5f5",
        "frost-dark-shade": "#1e1e1e",
        "frost-lighter-shade": "#f0f0f0",
        "frost-darker-shade": "#151515",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
