import { Code2, ArrowUpRight } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Frontend Engineering",
    description: "React ecosystem and UI development",
    skills: [
      "Figma",
      "React.js",
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "APIs and server-side applications",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT",
      "WebSocket",
      "Prisma",
    ],
  },
  {
    title: "Databases",
    description: "Data storage and realtime systems",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Realtime DB"],
  },
  {
    title: "Cloud & DevOps",
    description: "Deployment and infrastructure",
    skills: ["Docker", "AWS Lambda", "CI/CD", "Vercel"],
  },
  {
    title: "AI & LLM",
    description: "AI-powered product development",
    skills: ["Ollama", "Groq", "LangChain", "RAG"],
  },
  {
    title: "Tools & Testing",
    description: "Development workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Jest",
      "React Testing Library",
      "Jira",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-24">
      {" "}
      <div className="mb-12">
        {" "}
        <div className="flex flex-wrap items-end justify-between gap-4">
          {" "}
          <div>
            {" "}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Skills{" "}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Technologies & Tools
            </h2>
            <p className="max-w-2xl text-gray-500 dark:text-gray-400">
              Building scalable web applications using modern frontend, backend,
              cloud and AI technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          dark:border-neutral-800
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/30
          hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)]
        "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Code2 size={18} />

                  <h3 className="text-xl font-semibold">{group.title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                {group.description}
              </p>

              {/* <p className="text-sm font-medium mb-4">
                {group.skills.length} Technologies
              </p> */}

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                  text-xs
                  px-3
                  py-2
                  rounded-full
                  border
                  border-gray-200
                  dark:border-neutral-700
                  bg-white/50
                  dark:bg-neutral-900/50
                "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
