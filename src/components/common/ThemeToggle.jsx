import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-14 h-8 rounded-full
        bg-gray-200 dark:bg-neutral-800
        flex items-center px-1
        transition-colors duration-300
      "
    >
      {/* SLIDER */}
      <span
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full
          bg-white dark:bg-neutral-900
          shadow-md
          transition-all duration-300
          ${dark ? "translate-x-6" : "translate-x-0"}
        `}
      />

      {/* ICONS */}
      <Sun
        size={14}
        className={`absolute left-2 z-10 transition-opacity ${
          dark ? "opacity-0" : "opacity-100"
        }`}
      />
      <Moon
        size={14}
        className={`absolute right-2 z-10 transition-opacity ${
          dark ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
