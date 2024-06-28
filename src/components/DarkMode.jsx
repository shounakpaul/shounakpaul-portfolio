import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

function DarkMode({ className }) {
  const [isDark, setIsDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  function darkToggle() {
    setIsDark(!isDark);
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <motion.div
      className={
        "flex items-center justify-center p-3 border rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-900 border-neutral-900/10 dark:border-neutral-100/10 " +
        className
      }
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={darkToggle}
      initial={false}
      animate={{ rotate: isDark ? 180 : 0 }}
    >
      {isDark ? (
        <FiSun className="text-2xl text-neutral-100" />
      ) : (
        <FiMoon className="text-2xl text-neutral-900" />
      )}
    </motion.div>
  );
}

export default DarkMode;
