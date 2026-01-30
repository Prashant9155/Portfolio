import { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../data/navLinks";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Prashant<span className="text-blue-600">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            className="md:hidden text-2xl text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t dark:border-neutral-800">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
