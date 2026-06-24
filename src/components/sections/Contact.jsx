const LINKS = [
  {
    label: "Email",
    value: "[prashantsin2gh@gmail.com](mailto:prashantsin2gh@gmail.com)",
    href: "mailto:prashantsin2gh@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: "https://linkedin.com/in/prashantkumar-sde",
    external: true,
  },
  {
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/Prashant9155",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mb-24">
      {" "}
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
        Contact{" "}
      </p>
      <div className="rounded-3xl border border-gray-200 dark:border-neutral-800 p-8 md:p-10 bg-white dark:bg-neutral-900">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-600 border border-green-200 dark:border-green-800 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Open To Opportunities
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Let's Build Something Great Together
            </h2>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              I'm a Full-Stack Developer with 3+ years of experience building
              scalable web applications using React.js, Next.js, Node.js and
              modern cloud technologies. Currently open to full-time roles,
              remote opportunities, and exciting product teams.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-sm">
                📍 Patna, Bihar
              </span>

              <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-sm">
                💼 Immediate Joiner
              </span>

              <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-sm">
                🌍 Remote / Relocation
              </span>
            </div>
          </div>

          <div className="w-full lg:w-[360px]">
            <div className="space-y-3">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-neutral-800 px-4 py-4 hover:border-blue-500/40 hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-all"
                >
                  <div>
                    <p className="text-sm font-medium">{link.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {link.value}
                    </p>
                  </div>

                  <span className="text-sm text-blue-600">→</span>
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full rounded-xl bg-blue-600 text-white py-3.5 font-medium hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              Usually responds within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
