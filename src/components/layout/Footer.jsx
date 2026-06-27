import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div>

            <h3 className="text-lg font-semibold mb-2">
              Prashant Kumar
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Full-Stack Engineer building scalable web applications,
              AI-powered products and modern developer experiences.
            </p>

          </div>

          {/* Center */}

          <div className="flex items-center gap-4">

            <a
              href="mailto:prashantsin2gh@gmail.com"
              className="w-11 h-11 rounded-xl border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/Prashant9155"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/prashantkumar-sde"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <Linkedin size={18} />
            </a>

          </div>

          {/* Right */}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-neutral-700 px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>

        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} Prashant Kumar. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            Built with
            <Heart
              size={15}
              className="text-red-500 fill-red-500"
            />
            using React, Vite & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}