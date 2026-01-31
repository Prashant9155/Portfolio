export default function ProjectCardLarge({ project }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center py-16 border-b border-gray-200 dark:border-neutral-800">
      
      {/* LEFT – VISUAL */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border dark:border-neutral-800">
        <video
          src={project.video}
          muted
          loop
          playsInline
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT – CONTENT */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <ul className="mt-4 text-sm text-gray-500 dark:text-gray-400 space-y-1">
          {project.highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4 flex-wrap">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Live
            </a>
          )}

          {project.screenshots?.length > 0 && (
            <button
              onClick={project.onViewScreenshots}
              className="px-5 py-2 rounded-lg border dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            >
              View Screenshots
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
