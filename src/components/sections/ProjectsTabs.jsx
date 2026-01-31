export default function ProjectsTabs({ active, onChange }) {
  return (
    <div className="flex justify-center gap-4 my-12">
      {["websites", "dashboards"].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            px-6 py-2 rounded-full text-sm font-medium
            transition
            ${
              active === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
            }
          `}
        >
          {tab === "websites" ? "Websites" : "Dashboards"}
        </button>
      ))}
    </div>
  );
}
