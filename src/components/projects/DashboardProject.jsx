import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardProject({
  project,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}) {
  const navigate = useNavigate();

  return (
    <article className="relative max-w-6xl mx-auto">
      {/* VIDEO WRAPPER */}
      <div className="relative overflow-hidden rounded-2xl border dark:border-neutral-800">
        <video
          src={project.video}
          controls
          className="w-full aspect-video object-cover"
        />

        {/* NAVIGATION */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              bg-white/80 dark:bg-neutral-900/80
              backdrop-blur
              p-2 rounded-full
              hover:scale-105 transition
            "
          >
            <ChevronLeft />
          </button>
        )}

        {hasNext && (
          <button
            onClick={onNext}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              bg-white/80 dark:bg-neutral-900/80
              backdrop-blur
              p-2 rounded-full
              hover:scale-105 transition
            "
          >
            <ChevronRight />
          </button>
        )}

        {/* ACTION BUTTONS */}
        <div
          className="
            absolute top-4 right-4
            flex gap-3
            bg-white/90 dark:bg-neutral-900/80
            backdrop-blur
            px-4 py-2 rounded-lg
          "
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Live <ExternalLink size={14} />
            </a>
          )}

          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline"
          >
            Case Study
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-6 max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </div>
    </article>
  );
}
