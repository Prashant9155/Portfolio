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
              , a frontend-focused developer who enjoys building clean,
              scalable, and performance-oriented web applications.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              I specialize in translating complex requirements into intuitive,
              maintainable user interfaces using modern frontend technologies.
              I value clarity in design, simplicity in code, and consistency
              across products.
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
                { label: "Projects", value: "6+ Production Builds" },
                { label: "Primary Focus", value: "Frontend & UI Engineering" },
                { label: "Mindset", value: "Performance & Maintainability" },
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
        <div className="max-w-4xl space-y-6 text-gray-700 dark:text-gray-300 mb-20">
          <p>
            I began my professional journey as an <strong>Intern</strong>,
            where I focused on frontend development and quickly adapted to
            building real-world applications. Through consistent delivery and
            ownership, I was converted into a <strong>full-time developer</strong>
            within the same organization.
          </p>

          <p>
            Over time, I contributed to admin dashboards, real-time interfaces,
            and content-driven platforms. I worked closely with designers,
            backend engineers, and product stakeholders to deliver reliable,
            production-ready features.
          </p>

          <p>
            In <strong>November 2025</strong>, I decided to step away to explore
            new challenges and broaden my exposure. I am currently{" "}
            <strong>actively seeking new opportunities</strong> where I can
            contribute to meaningful products and continue growing as an
            engineer.
          </p>
        </div>

        {/* WHAT I WORK WITH */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What I Work With
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My day-to-day work involves building React-based applications,
            designing reusable component systems, integrating APIs, and
            optimizing performance. I care deeply about code readability,
            scalability, and long-term maintainability.
          </p>
        </div>

        {/* WORK PRINCIPLES */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Scalable UI",
              desc: "Component-driven architecture that grows with the product.",
            },
            {
              title: "Performance",
              desc: "Fast rendering, efficient state management, smooth UX.",
            },
            {
              title: "UX First",
              desc: "Designing interfaces with real users in mind.",
            },
            {
              title: "Ownership",
              desc: "Taking responsibility from idea to production.",
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
