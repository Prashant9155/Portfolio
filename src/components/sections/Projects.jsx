const PROJECTS = [
  {
    id: "nextround-ai",
    featured: true,
    title: "NextRound AI",
    category: "AI Powered Interview Platform",
    description:
      "A full-stack interview preparation platform that combines AI, structured learning and modern frontend engineering to help developers prepare for technical interviews.",

    highlights: [
      "AI-powered mock interview assistant",
      "Resume analysis & feedback",
      "Interview roadmap generation",
      "Authentication & protected dashboard",
    ],

    tech: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Tailwind CSS",
      "Groq",
      "LangChain",
      "RAG",
      "Docker",
    ],

    demo: "https://github.com/Prashant9155/next-round-ai",
    github: "https://github.com/Prashant9155/next-round-ai",
  },

  {
    id: "deployment-platform",
    featured: false,
    title: "Cloud Deployment Platform",
    category: "DevOps Dashboard",

    description:
      "A deployment management platform that automates onboarding, deployment tracking and infrastructure monitoring from a centralized dashboard.",

    highlights: [
      "Docker-based deployments",
      "Background job processing",
      "Deployment monitoring",
      "Infrastructure dashboard",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "Docker",
      "BullMQ",
      "Redis",
      "AWS",
      "PostgreSQL",
    ],

    demo: "https://deployment-frontend-nirh.onrender.com/",
    github:
      "https://github.com/Prashant9155/deployment-control-platform",
  },

  {
    id: "portfolio",

    featured: false,

    title: "AI Portfolio",

    category: "Personal Portfolio",

    description:
      "A modern portfolio showcasing professional experience, engineering projects and an AI recruiter assistant powered by Retrieval-Augmented Generation.",

    highlights: [
      "AI Recruiter Assistant",
      "RAG Pipeline",
      "Semantic Search",
      "Knowledge Base",
    ],

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Groq",
      "LangChain",
      "RAG",
      "JavaScript",
    ],

    demo: "https://portfolio-prashant-dev.vercel.app",

    github: "https://github.com/Prashant9155/Portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            Featured Projects
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Personal projects built
            <br />
            with modern engineering.
          </h2>

          <p className="md:text-lg md:leading-8 text-sm leading-6 text-gray-600 dark:text-gray-400">
            A selection of personal projects demonstrating full-stack
            engineering, AI integration, cloud-native development and modern
            frontend architecture. Every project was independently designed and
            developed to solve real-world problems.
          </p>
        </div>

        <div className="space-y-5 md:space-y-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl lg:rounded-3xl border p-6 md:p-10 transition-all ${
                project.featured
                  ? "border-blue-500/30 bg-blue-50/40 dark:bg-blue-900/10"
                  : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                    {project.category}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg md:leading-8 leading-6 md:mb-8 mb-5">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500" />

                        <span className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-5">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-blue-600 md:text-lg text-sm"
                    >
                      Live Demo →
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-blue-600 md:text-lg text-sm"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>

                <div className="lg:w-70">
                  <h4 className="font-semibold mb-4">
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-full text-xs md:text-sm border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}