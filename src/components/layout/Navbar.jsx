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
    <header className="sticky top-0 z-50 border-b border-gray-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("hero")}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
            PK
          </div>

          <div className="hidden sm:block text-left">
            <h2 className="font-semibold text-sm">
              Prashant Kumar
            </h2>

            <p className="text-xs text-gray-500">
              Full-Stack Engineer
            </p>
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
// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import navLinks from "../../data/navLinks";
// import ThemeToggle from "../common/ThemeToggle";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-gray-200 dark:border-neutral-800">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-xl font-bold transition-transform duration-200 hover:scale-105"
//         >
//           <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
//             Prashant
//           </span>
//           <span className="text-gray-900 dark:text-white">.dev</span>
//         </Link>

//         {/* <img src="/logo.png" alt="logo" className="w-48 h-24" /> */}

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `
//     relative font-medium transition-colors duration-300
//     ${
//       isActive
//         ? "text-blue-600"
//         : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//     }
//     after:absolute after:left-0 after:-bottom-1
//     after:h-0.5 after:w-full
//     after:origin-left after:scale-x-0
//     after:bg-linear-to-r after:from-blue-600 after:to-purple-600
//     after:transition-transform after:duration-300
//     hover:after:scale-x-100
//     ${isActive ? "after:scale-x-100" : ""}
//     `
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Button */}

//         <div className="flex items-center gap-2">
//           <ThemeToggle />

//           <button
//             className="md:hidden text-2xl text-gray-800 dark:text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-neutral-900 border-t dark:border-neutral-800">
//           <ul className="flex flex-col px-6 py-4 gap-4">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `font-medium ${
//                     isActive
//                       ? "text-blue-600"
//                       : "text-gray-700 dark:text-gray-300"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

