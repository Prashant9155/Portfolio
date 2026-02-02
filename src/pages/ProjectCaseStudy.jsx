import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-extrabold mb-10">
        {project.title}
      </h1>

      {/* OVERVIEW */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {project.caseStudy?.overview}
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Challenges</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
          {project.caseStudy?.challenges?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* SOLUTIONS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Solutions</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
          {project.caseStudy?.solutions?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">My Role</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
          {project.responsibilities?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* TECH */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech?.map(t => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-neutral-800"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
