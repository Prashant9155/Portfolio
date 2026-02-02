import { useState } from "react";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

export default function WebsiteProject({ project, onPrev, onNext, hasPrev, hasNext }) {
  const navigate = useNavigate();

  return (
    <article className="relative">
      {/* TEXT CONTENT */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </div>

      {/* CAROUSEL WITH FIXED ACTIONS */}
      <div className="relative">
        <ImageCarousel images={project.screenshots} />

        {/* FIXED BUTTONS INSIDE CAROUSEL */}
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
              className="
                inline-flex items-center gap-1
                text-sm font-medium
                text-blue-600
                hover:underline
              "
            >
              Live <ExternalLink size={14} />
            </a>
          )}

          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className="
              text-sm font-medium
              text-gray-800 dark:text-gray-200
              hover:underline
            "
          >
            Case Study
          </button>
        </div>
      </div>

      {/* WEBSITE NAVIGATION */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-lg
            text-gray-700 dark:text-gray-300
            hover:bg-gray-100 dark:hover:bg-neutral-800
            disabled:opacity-40
          "
        >
          <ArrowLeft size={18} />
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-lg
            text-gray-700 dark:text-gray-300
            hover:bg-gray-100 dark:hover:bg-neutral-800
            disabled:opacity-40
          "
        >
          Next
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}

