export default function SkillCard({ title, items }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800
                    bg-white dark:bg-neutral-900 p-6 transition hover:shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 text-sm rounded-md
                       bg-gray-100 dark:bg-neutral-800
                       text-gray-800 dark:text-gray-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
