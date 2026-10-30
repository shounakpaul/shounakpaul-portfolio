import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../lib/themeContext";
import { cx } from "../lib/cx";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={cx(
        "inline-flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent",
        className
      )}
    >
      {isDark ? (
        <FiSun aria-hidden="true" className="h-[17px] w-[17px]" />
      ) : (
        <FiMoon aria-hidden="true" className="h-[17px] w-[17px]" />
      )}
    </button>
  );
}
