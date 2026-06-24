
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {


  return (
    <header className="sticky top-0 z-50 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-sm border-b border-gray-200 dark:border-neutral-700">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        <span className="text-sm font-semibold whitespace-nowrap">
          Prashant Kumar
        </span>

        <nav className="hidden sm:flex gap-8">
          <a
            onClick={() => scrollTo('experience')}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer transition-colors"
          >
            Work
          </a>
          <a
            onClick={() => scrollTo('projects')}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer transition-colors"
          >
            Projects
          </a>
          <a
            onClick={() => scrollTo('skills')}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer transition-colors"
          >
            Skills
          </a>
          <a
            onClick={() => scrollTo('ai-chat')}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer transition-colors"
          >
            Ask AI
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm font-medium px-4 py-1.5 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>
  )
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

