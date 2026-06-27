import {
  BriefcaseBusiness,
  Boxes,
  BrainCircuit,
  Code2,
  MapPinned,
  Rocket,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: BriefcaseBusiness,
    value: "3+",
    title: "Years Experience",
    description:
      "Building scalable production-grade web applications across frontend and full-stack development.",
  },
  {
    icon: Code2,
    value: "Full-Stack",
    title: "Engineering",
    description:
      "Strong frontend expertise with React.js and Next.js, complemented by backend development using Node.js, Express.js, MongoDB and PostgreSQL.",
  },
  {
    icon: Boxes,
    value: "5+",
    title: "Production Applications",
    description:
      "Delivered applications from architecture and development to deployment for real-world users.",
  },
  {
    icon: BrainCircuit,
    value: "AI",
    title: "Applied Engineering",
    description:
      "Building AI-powered products using RAG, LangChain, Groq, Ollama and modern LLM integrations.",
  },
  {
    icon: Rocket,
    value: "Immediate",
    title: "Availability",
    description:
      "Open to full-time opportunities and ready to contribute from day one.",
  },
  {
    icon: MapPinned,
    value: "Flexible",
    title: "Work Location",
    description:
      "Based in Patna and open to Bengaluru, Noida, Gurugram or remote opportunities.",
  },
];

export default function CareerHighlights() {
  return (
    <section
      id="career-highlights"
      className="py-24 border-b border-gray-200 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-900/40"
    >
      <div className="mx-auto ">
        <div className="max-w-3xl mb-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Career Highlights
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Building scalable products with
            <br />
            modern engineering practices.
          </h2>

          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            Over the past three years I've helped build production web
            applications while expanding into backend engineering, cloud-native
            development and AI-powered products. I enjoy solving real business
            problems through clean architecture, scalable systems and thoughtful
            user experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20">
                  <Icon
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>

                <div className="mb-5">
                  <p className="text-3xl font-bold tracking-tight">
                    {item.value}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}