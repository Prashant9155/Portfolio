import { useState } from "react";
import projects from "../data/projects";
import ProjectTabs from "../components/projects/ProjectTabs";
import WebsiteProject from "../components/projects/WebsiteProject";
import DashboardProject from "../components/projects/DashboardProject";

export default function Projects() {
  const [active, setActive] = useState("website");
  const [websiteIndex, setWebsiteIndex] = useState(0);
  const [dashboardIndex, setDashboardIndex] = useState(0); // ✅ ADD

  const websites = projects.filter(p => p.type === "website");
  const dashboards = projects.filter(p => p.type === "dashboard");

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* INTRO */}
      <header className="max-w-3xl mb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          A curated selection of real-world websites and dashboards showcasing
          frontend architecture, performance, and UI craftsmanship.
        </p>
      </header>

      <ProjectTabs active={active} onChange={setActive} />

      <div className="mt-20">
        {/* WEBSITE */}
        {active === "website" && (
          <WebsiteProject
            project={websites[websiteIndex]}
            hasPrev={websiteIndex > 0}
            hasNext={websiteIndex < websites.length - 1}
            onPrev={() => setWebsiteIndex(i => Math.max(i - 1, 0))}
            onNext={() => setWebsiteIndex(i => Math.min(i + 1, websites.length - 1))}
          />
        )}

        {/* DASHBOARD – ONE AT A TIME */}
        {active === "dashboard" && dashboards.length > 0 && (
          <DashboardProject
            project={dashboards[dashboardIndex]}
            hasPrev={dashboardIndex > 0}
            hasNext={dashboardIndex < dashboards.length - 1}
            onPrev={() => setDashboardIndex(i => Math.max(i - 1, 0))}
            onNext={() =>
              setDashboardIndex(i => Math.min(i + 1, dashboards.length - 1))
            }
          />
        )}
      </div>
    </section>
  );
}
