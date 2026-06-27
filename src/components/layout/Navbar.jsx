import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

function scrollTo(id) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

const NAV_ITEMS = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Projects",
    id: "projects",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "AI",
    id: "ai-chat",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNavigation(id) {
    scrollTo(id);
    setOpen(false);
  }

  return (
    <header
      className="
    sticky
    top-0
    z-50
    backdrop-blur-xl
    bg-white/70
    dark:bg-neutral-950/65
    border-b
    border-white/20
    dark:border-white/10
    shadow-[0_8px_32px_rgba(0,0,0,0.04)]
    supports-backdrop-filter:bg-white/65
    dark:supports-backdrop-filter:bg-neutral-950/60
    transition-all
    duration-300
  "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("hero")}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
            PK
          </div>

          <div className="hidden sm:block text-left">
            <h2 className="font-semibold text-sm">Prashant Kumar</h2>

            <p className="text-xs text-gray-500">Full-Stack Engineer</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-90 transition"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-neutral-700"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-left text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black py-3 font-medium"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

