export default function Hero() {
  return (
    <section
      id="hero"
      className="
    min-h-[80vh]
    lg:pt-24
    lg:pb-20
    py-8 md:py-12
    border-b
    border-neutral-700
    grid
    grid-cols-1
    lg:grid-cols-[1fr_auto]
    gap-12
    items-start
  "
    >
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>3 Years
          Professional Experience
        </div>

        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
          Full-Stack Developer
          <br />
          Specializing in React.js & Node.js
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
          Full-Stack Developer with 3+ years of experience building scalable web
          applications using React.js, Next.js, TypeScript and Node.js.
          Experienced in developing modern user interfaces, integrating APIs,
          and building production-ready solutions.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xl font-semibold">3+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">20+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              APIs Integrated
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">5+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Applications Built
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">10+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Features Delivered
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Prashant9155"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/prashantkumar-sde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-lg border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:prashantsin2gh@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-lg border border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hidden lg:flex shrink-0">
        <div className="w-85 rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800">
          <img
            src="/assets/image/me.png"
            alt="Prashant Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
