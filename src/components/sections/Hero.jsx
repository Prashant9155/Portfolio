import { ArrowDown, Bot, Download, FolderOpen } from "lucide-react";

function scrollTo(id) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      relative
      overflow-hidden
      border-b
      border-gray-200
      dark:border-neutral-800
    "
    >
      <div className="max-w-6xl mx-auto py-8 md:py-16">
        <div className="grid lg:grid-cols-[1.2fr_420px] gap-8 items-center">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs md:text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400 md:mb-8 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for Full-Time Opportunities
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 md:mb-8">
              Prashant
              <br />
              Kumar.
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 md:mb-8 text-gray-800 dark:text-gray-200">
              Building AI-powered
              <br />
              Full-Stack Applications
              <br />
              with React & Node.js.
            </h2>

            <p className="max-w-2xl text-sm md:text-lg leading-6 md:leading-8 text-gray-600 dark:text-gray-400 mb-6 md:mb-10">
              Full-Stack Engineer with 3+ years of experience building
              production-grade web applications, AI-powered products and modern
              developer tools using React, Next.js, Node.js, PostgreSQL and
              Large Language Models.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg md:rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 font-medium hover:opacity-90 transition"
              >
                <Download size={18} />
                Resume
              </a>

              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-neutral-700 px-6 py-3 font-medium hover:bg-gray-50 dark:hover:bg-neutral-900 transition"
              >
                <FolderOpen size={18} />
                View Projects
              </button>

              <button
                onClick={() => scrollTo("ai-chat")}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-neutral-700 px-6 py-3 font-medium hover:bg-gray-50 dark:hover:bg-neutral-900 transition"
              >
                <Bot size={18} />
                Ask AI
              </button>
            </div>

            <button
              onClick={() => scrollTo("about")}
              className="mt-16 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
            >
              Learn more
              <ArrowDown size={16} />
            </button>
          </div>

          {/* Right */}

          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl">
              <img
                src="/assets/image/me.png"
                alt="Prashant Kumar"
                className="aspect-4/5 w-full object-cover"
              />

              <div className="p-6 border-t border-gray-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold">
                  Prashant Kumar
                </h3>

                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Full-Stack Engineer
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Experience</span>
                    <span>3+ Years</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span>Patna, India</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability</span>
                    <span className="text-green-600 dark:text-green-400">
                      Immediate
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Focus</span>
                    <span>AI + Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}