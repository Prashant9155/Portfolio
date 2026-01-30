// ...existing code...
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => setDark((s) => !s);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md border text-sm
                 bg-gray-100 text-gray-800 border-gray-300
                 dark:bg-neutral-800 dark:text-gray-200 dark:border-gray-700
                 hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
// ...existing code...