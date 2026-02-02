export default function ProjectTabs({ active, onChange }) {
  const tabs = [
    { id: "website", label: "Websites" },
    { id: "dashboard", label: "Dashboards" },
    { id: "uiux", label: "UI / UX" },
  ];

  return (
    <nav className="flex gap-10 border-b border-gray-200 dark:border-neutral-800">
      {tabs.map(tab => {
        const isActive = active === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              relative pb-4 text-sm font-medium transition-colors
              ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }
            `}
          >
            {tab.label}
            {isActive && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
