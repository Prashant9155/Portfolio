import skills from "../../data/skills";
import SkillCard from "../common/SkillCard";

export default function Skills() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Tech Stack
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Technologies and tools I use to build scalable, high-performance
            web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillCard
              key={group.category}
              title={group.category}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
