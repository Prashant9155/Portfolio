import { Linkedin, Github, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Prashant Kumar
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Frontend & Full-Stack Developer focused on building scalable,
            performant, and user-centric web applications.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/prashantkumar-sde",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/Prashant9155",
                label: "GitHub",
              },
              {
                icon: Phone,
                href: "https://wa.me/919155729247",
                label: "WhatsApp",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/",
                label: "Instagram",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="
                  group
                  p-3 rounded-full
                  border border-gray-300 dark:border-neutral-700
                  bg-white dark:bg-neutral-900
                  transition-all duration-300
                  hover:scale-110
                  hover:border-blue-600
                  hover:bg-blue-50 dark:hover:bg-neutral-800
                "
              >
                <Icon
                  size={16}
                  className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-gray-200 dark:border-neutral-800" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Prashant Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
