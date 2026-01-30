const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Redux Toolkit",
  "Node.js",
  "REST APIs",
  "Firebase",
  "CI / CD",
  "Git & GitHub",
  "Vercel",
];

export default function SkillMarquee() {
  return (
    <div className="mt-12 overflow-hidden">
      <div className="relative flex gap-6 whitespace-nowrap animate-marquee">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="
              px-5 py-2 rounded-full
              bg-white/80 dark:bg-neutral-800
              border border-gray-200 dark:border-neutral-700
              text-sm font-medium
              text-gray-800 dark:text-gray-300
              shadow-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
