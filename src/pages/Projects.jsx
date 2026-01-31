import { useState } from "react";
import projects from "../data/projects";
import ProjectsHero from "../components/sections/ProjectsHero";
import ProjectsTabs from "../components/sections/ProjectsTabs";
import ProjectCardLarge from "../components/sections/ProjectCardLarge";

export default function Projects() {
  const [active, setActive] = useState("websites");

  const filtered = projects.filter(
    (p) => p.category === active
  );

  return (
    <>
      <ProjectsHero />
      <section className="max-w-6xl mx-auto px-6">
        <ProjectsTabs active={active} onChange={setActive} />

        <div>
          {filtered.map((project) => (
            <ProjectCardLarge
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </>
  );
}

