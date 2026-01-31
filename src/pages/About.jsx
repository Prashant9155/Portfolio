export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ABOUT HERO */}
        <div className="grid gap-16 md:grid-cols-2 items-center mb-24">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              About Me
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              I’m{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Prashant Kumar
              </span>
              , a frontend-focused developer with a strong interest in building
              clean, scalable, and performance-driven web interfaces.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              My work sits at the intersection of design and engineering —
              translating ideas into polished user experiences using modern
              frontend technologies.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/cv.pdf"
                target="_blank"
                className="
                  inline-block px-6 py-3 rounded-lg
                  bg-linear-to-r from-blue-600 to-purple-600
                  text-white font-medium
                  hover:opacity-90 transition
                "
              >
                View CV
              </a>
            </div>

            {/* HIGHLIGHT STATS */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Experience", value: "2.5+ Years" },
                { label: "Projects", value: "6+ Production Projects" },
                { label: "Primary Focus", value: "Frontend & UI" },
                { label: "Approach", value: "Performance-First" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 dark:border-neutral-800
                             bg-white dark:bg-neutral-900 p-4"
                >
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl rounded-full" />

              <img
                src="/assets/image/hero-ai-illustration.png"
                alt="Developer Illustration"
                className="relative w-72 md:w-96 rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* EXPERIENCE STORY */}
        <div className="max-w-4xl space-y-6 text-gray-700 dark:text-gray-300 mb-24">
          <p>
            I began my professional journey as an <strong>Intern</strong>, where
            I focused on frontend development and quickly adapted to building
            real-world applications. Due to consistent performance and
            ownership, I was later converted into a <strong>full-time
            developer</strong> within the same organization.
          </p>

          <p>
            During my tenure, I worked on admin dashboards, real-time
            applications, and content-driven platforms, collaborating closely
            with designers and backend teams to deliver production-ready
            solutions.
          </p>

          <p>
            In <strong>November 2025</strong>, I decided to move on to explore new
            challenges. I am currently <strong>actively looking for new
            opportunities</strong> where I can contribute to impactful products
            and continue growing as a frontend engineer.
          </p>
        </div>

        {/* WORK PRINCIPLES */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Scalable UI",
              desc: "Reusable components with predictable structure.",
            },
            {
              title: "Performance",
              desc: "Optimized rendering and smooth user interactions.",
            },
            {
              title: "UX Focus",
              desc: "Designing interfaces for clarity and usability.",
            },
            {
              title: "Ownership",
              desc: "Responsible from idea to production delivery.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 dark:border-neutral-800
                         bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
