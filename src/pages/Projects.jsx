import { useEffect, useState } from "react";
import projects from "../data/projects";
import ProjectShowcase from "../components/sections/ProjectShowcase";

export default function Projects() {
  const featuredScreens = [
 "/assets/screenshots/img2.png",
    "/assets/screenshots/img1.png",
    "/assets/screenshots/img3.png",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredScreens.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* LEFT – TEXT */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                Selected Projects
              </h1>

              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                A curated set of production-grade projects demonstrating
                scalable frontend architecture, real-time features, and
                performance-focused UI engineering.
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
                Real products • Real users • Real code
              </p>
            </div>

            {/* RIGHT – SCREENSHOT CAROUSEL */}
            <div className="relative w-full max-w-md md:max-w-lg mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-neutral-800">
                {featuredScreens.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt="Featured project screenshot"
                    className={`
                absolute inset-0 w-full h-full object-cover
                transition-all duration-1000 ease-in-out
                ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              `}
                  />
                ))}
              </div>

              {/* INDICATORS */}
              <div className="mt-4 flex justify-center gap-2">
                {featuredScreens.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full transition
                ${
                  index === active
                    ? "bg-blue-600"
                    : "bg-gray-300 dark:bg-neutral-700"
                }
              `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASES */}
      {projects.map((project, index) => (
        <ProjectShowcase
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
