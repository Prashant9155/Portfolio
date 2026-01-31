import { useState } from "react";
import ScreenshotModal from "../common/ScreenshotModal";

export default function ProjectShowcase({ project, reverse }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24">
      <div
        className={`max-w-6xl mx-auto px-6 grid gap-12 items-center
        ${reverse ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"}`}
      >
        {/* VIDEO */}
        <div className={reverse ? "md:order-2" : ""}>
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-lg text-blue-600 dark:text-purple-400">
            {project.subtitle}
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm
                           bg-gray-100 dark:bg-neutral-800
                           text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-6 pt-4">
            <button
              onClick={() => setOpen(true)}
              className="text-blue-600 font-medium hover:underline"
            >
              View Screenshots
            </button>

            <a
              href={project.code}
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      </div>

      {open && (
        <ScreenshotModal
          images={project.screenshots}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
