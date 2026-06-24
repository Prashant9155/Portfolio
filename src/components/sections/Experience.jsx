const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Indiclancers Technology Pvt. Ltd.",
    location: "Noida, India",
    date: "Jul 2023 – Present",
    achievements: [
      "Developed and maintained production-grade web applications using React.js, Next.js, JavaScript and TypeScript.",
      "Built reusable UI components and scalable frontend architecture to improve development efficiency.",
      "Integrated 20+ REST APIs and implemented real-time functionality using Firebase and WebSocket connections.",
      "Collaborated closely with designers, backend engineers and QA teams to deliver new product features.",
      "Optimized application performance through lazy loading, code splitting and component-level optimization.",
      "Contributed to products across EdTech and service platforms with a focus on user experience and maintainability.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "Node.js",
      "Firebase",
      "REST APIs",
      "WebSocket",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-24">
      <div className="mb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4">
          Experience{" "}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Professional Experience
        </h2>
        <p className="max-w-3xl text-gray-500 dark:text-gray-400 leading-relaxed">
          Full-Stack Developer with 3+ years of experience building
          production-grade web applications using React.js, Next.js, TypeScript
          and Node.js. Experienced in frontend architecture, API integrations,
          real-time applications and delivering scalable user experiences.
        </p>
      </div>
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900">
        {EXPERIENCE.map((exp) => (
          <div key={exp.role} className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>

                <p className="text-gray-500 dark:text-gray-400">
                  {exp.company} · {exp.location}
                </p>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {exp.date}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {exp.achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs rounded-full border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
