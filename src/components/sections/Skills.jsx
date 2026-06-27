import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building responsive, scalable and high-performance user interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Designing APIs, authentication and scalable server-side applications.",
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
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Building intelligent applications using modern LLMs and RAG pipelines.",
    skills: [
      "LangChain",
      "RAG",
      "Groq",
      "Ollama",
      "OpenAI APIs",
      "Prompt Engineering",
    ],
  },

  {
    icon: Database,
    title: "Databases",
    description:
      "Working with relational, NoSQL and realtime databases.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Realtime Database",
    ],
  },

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deployment automation and cloud-native development workflows.",
    skills: [
      "Docker",
      "AWS Lambda",
      "CI/CD",
      "Vercel",
      "GitHub Actions",
    ],
  },

  {
    icon: GitBranch,
    title: "Developer Workflow",
    description:
      "Tools used throughout the software development lifecycle.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Jira",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-10 md:py-20 border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400">
            Skills & Technologies
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Engineering skills
            <br />
            across the modern web stack.
          </h2>

          <p className="md:text-lg md:leading-8 text-sm leading-6 text-gray-600 dark:text-gray-400">
            My experience spans frontend development, backend engineering,
            AI-powered applications, cloud infrastructure and modern developer
            tooling. I enjoy building scalable products with clean architecture
            and maintainable code.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-2xl md:rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20">
                  <Icon
                    size={22}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {group.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 mb-6">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 px-3 py-2 text-xs md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}