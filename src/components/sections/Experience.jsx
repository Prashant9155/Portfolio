const EXPERIENCE = {
  role: "Software Engineer",
  company: "IndicArena Technology Pvt. Ltd.",
  location: "Remote, India",
  duration: "July 2023 – Present",

  overview:
    "Contributed to the development of multiple production-grade web applications across EdTech, climate-tech and service platforms. Primarily focused on frontend engineering while gradually expanding into full-stack development through backend APIs, cloud services and AI-powered applications.",

  contributions: [
    "Developed scalable applications using React.js, Next.js, JavaScript and TypeScript.",
    "Built reusable component architecture to improve consistency and development efficiency.",
    "Integrated 20+ REST APIs along with Firebase Realtime Database and WebSocket-based features.",
    "Optimized application performance using lazy loading, code splitting and rendering optimizations.",
    "Collaborated closely with product managers, designers, backend engineers and QA teams.",
    "Maintained production applications and delivered new features with a focus on scalability and maintainability.",
  ],

  products: [
    {
      name: "Elympiad",
      description:
        "Online quiz and assessment platform for schools and educational organizations.",
    },
    {
      name: "Wildflower Labs",
      description:
        "Climate-tech platform focused on sustainability initiatives and environmental solutions.",
    },
    {
      name: "Maideaze",
      description:
        "Service management platform for connecting users with home service professionals.",
    },
  ],

  technologies: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "Node.js",
    "Firebase",
    "REST APIs",
    "GraphQL",
    "WebSocket",
    "Git",
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 md:py-20 border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400">
            Professional Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Building production software
            <br />
            for real-world users.
          </h2>

          <p className="md:text-lg md:leading-8 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Over the past three years I've contributed to multiple production
            applications, collaborated with cross-functional teams and helped
            deliver scalable web experiences using modern frontend and backend
            technologies.
          </p>
        </div>

        <div className=" rounded-2xl md:rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
          <div className="p-6 md:p-10 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {EXPERIENCE.role}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {EXPERIENCE.company}
                </p>

                <p className="text-xs md:text-sm mt-2 text-gray-500">
                  {EXPERIENCE.location}
                </p>
              </div>

              <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                {EXPERIENCE.duration}
              </div>
            </div>

            <p className="mt-6 md:mt-8 max-w-4xl text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-8">
              {EXPERIENCE.overview}
            </p>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800">
              <h4 className="font-semibold text-sm md:text-lg mb-4 md:mb-6">
                Key Contributions
              </h4>

              <div className="space-y-3 md:space-y-5">
                {EXPERIENCE.contributions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 md:gap-4"
                  >
                    <div className="mt-2 w-4 h-2 rounded-full bg-blue-500" />

                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg md:leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-10">
              <h4 className="font-semibold text-lg mb-4 md:mb-6">
                Products Contributed
              </h4>

              <div className="space-y-6 mb-10">
                {EXPERIENCE.products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-xl border border-gray-200 dark:border-neutral-800 p-5"
                  >
                    <h5 className="font-semibold mb-2">
                      {product.name}
                    </h5>

                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold md:text-lg md:mb-5 text-sm mb-4">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {EXPERIENCE.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full text-xs md:text-sm border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800"
                  >
                    {tech}
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