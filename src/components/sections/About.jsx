export default function About() {
  const highlights = [
    "3+ Years Professional Experience",
    "Production Web Applications",
    "React.js & Next.js",
    "Node.js & Express.js",
    "AI + RAG Applications",
    "Immediate Joiner",
  ];

  const interests = [
    "AI Powered Applications",
    "Full-Stack SaaS",
    "Scalable Dashboards",
    "Developer Tools",
    "Cloud Infrastructure",
    "Modern Frontend Architecture",
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-5">
          About
        </p>

        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-8 md:gap-16">
          {/* Left */}

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
              Building scalable web products
              <br />
              and AI-powered applications.
            </h2>

            <div className=" space-y-4 md:space-y-6 text-gray-600 dark:text-gray-400 leading-6 md:leading-8 text-sm md:text-lg">
              <p>
                I'm{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Prashant Kumar
                </span>
                , a Full-Stack Engineer with 3+ years of professional experience
                building production-grade applications using React.js, Next.js,
                TypeScript and Node.js.
              </p>

              <p>
                Throughout my career, I've developed enterprise dashboards,
                AI-powered applications, deployment platforms and modern web
                products with a strong focus on scalability, clean architecture,
                performance and user experience.
              </p>

              <p>
                Recently I've been exploring AI engineering by building
                Retrieval-Augmented Generation (RAG) systems, integrating LLMs,
                and developing intelligent developer tools that combine modern
                full-stack engineering with artificial intelligence.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold mb-5">Professional Highlights</h3>

              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />

                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold mb-5">I enjoy building</h3>

              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full text-sm bg-gray-100 dark:bg-neutral-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
