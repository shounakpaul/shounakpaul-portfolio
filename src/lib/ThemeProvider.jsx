import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./themeContext";

function readInitialTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Theme persistence is optional when storage is unavailable.
    }

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute(
        "content",
        theme === "dark" ? "#09090B" : "#F4F4F5"
      );
    }
  }, [theme]);

  useEffect(() => {
    function handleStorage(event) {
      if (
        event.key === "theme" &&
        (event.newValue === "light" || event.newValue === "dark")
      ) {
        setTheme(event.newValue);
      }
    }

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
