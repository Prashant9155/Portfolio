const PROFESSIONAL_PROJECTS = [
  {
    id: "elympiad",
    name: "Elympiad",
    description:
      "Real-time quiz and assessment platform where I contributed to dashboard development, API integrations, result management workflows and scalable frontend architecture.",
    tags: ["React.js", "Firebase", "Redux", "REST APIs", "GCP"],
    website: "https://elympiad.com",
  },
  {
    id: "wildflower",
    name: "Wildflower Labs",
    description:
      "Climate-tech platform built using Next.js with SEO optimization, CMS integration, responsive architecture and interactive data visualizations.",
    tags: ["Next.js", "React.js", "TypeScript", "CMS", "SEO"],
    website: "https://wildflowerlabs.earth",
  },
  {
    id: "maideaze",
    name: "Maideaze",
    description:
      "Service management platform featuring booking workflows, attendance tracking, operational dashboards and realtime data synchronization.",
    tags: ["React.js", "Firebase", "REST APIs", "Realtime Database"],
    website: "#",
  },
];

const PERSONAL_PROJECTS = [
  {
    id: "nextround",
    name: "NextRound AI",
    featured: true,
    description:
      "AI-powered interview preparation platform featuring mock interviews, resume analysis, learning roadmaps and open-source LLM integration.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Ollama",
      "Docker",
      "JWT",
    ],
    website: "https://your-demo-link.com",
    github: "https://github.com/Prashant9155/next-round-ai",
  },
  {
    id: "deployment",
    name: "Cloud Deployment Platform",
    featured: false,
    description:
      "Deployment control panel for onboarding applications, managing deployments and monitoring infrastructure through a centralized dashboard.",
    tags: ["React.js", "Node.js", "Docker", "AWS", "PostgreSQL", "REST APIs"],
    website: "https://your-demo-link.com",
    github: "https://github.com/Prashant9155/deployment-control-panel",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      {" "}
      <div className="mb-12">
        {" "}
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4">
          Projects{" "}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Selected Work
        </h2>
        <p className="max-w-3xl text-gray-500 dark:text-gray-400 leading-relaxed">
          A collection of professional products and personal projects focused on
          frontend engineering, full-stack development and modern web
          technologies.
        </p>
      </div>
      {/* Professional Projects */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Professional Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROFESSIONAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 dark:border-neutral-800 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold mb-3">{project.name}</h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Personal Projects */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Personal Projects</h3>

        <div className="grid grid-cols-1 gap-4">
          {PERSONAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`border rounded-2xl p-6 ${
                project.featured
                  ? "border-blue-500/40 bg-blue-500/3"
                  : "border-gray-200 dark:border-neutral-800"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-lg font-semibold">{project.name}</h4>

                {project.featured && (
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-5">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
