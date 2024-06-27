/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "frost-light-shade": "#f5f5f5",
        "frost-dark-shade": "#1e1e1f",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
