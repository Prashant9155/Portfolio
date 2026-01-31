import { NavLink } from "react-router-dom";
import useTypewriter from "../../hooks/useTypewriter";
import SkillMarquee from "./SkillMarquee";

export default function Hero() {
  const expertise = useTypewriter([
    "Scalable React & UI Architecture",
    "High-Performance Frontend Engineering",
    "API-Driven Web Applications",
    "CI/CD Automation & Production Deployments",
    "Component-Driven Design Systems",
  ]);

  return (
    <section
      className="
        relative overflow-hidden
        bg-linear-to-br
        from-blue-50 via-white to-purple-50
        dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* 12-column grid */}
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* LEFT – CONTENT */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                Prashant Kumar
              </span>
            </h1>

            <h2 className="mt-4 text-sm sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="opacity-80">Expertise in</span>

              <span
                className="
      relative
      text-blue-600 dark:text-purple-400
      transition-all duration-300 ease-out
    "
              >
                {expertise}
                <span className="ml-1 animate-pulse opacity-70">▍</span>
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-92 md:max-w-2xl">
              I help businesses and teams build scalable, performant, and
              maintainable web applications using modern frontend and backend
              technologies.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <NavLink
                to="/projects"
                className="
                  px-6 py-3 rounded-lg
                  bg-linear-to-r from-blue-600 to-purple-600
                  text-white font-medium
                  hover:opacity-90 transition
                "
              >
                View Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="
                  px-6 py-3 rounded-lg border
                  border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-neutral-800
                  transition
                "
              >
                Contact Me
              </NavLink>
            </div>
          </div>

          {/* RIGHT – AI ILLUSTRATION */}
          <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end">
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 roundedl bg-linear-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 group-hover:opacity-50 transition" />

              {/* Image Card */}
              <div
                className="
                  relative
                  w-80 md:w-72 lg:w-80
                  rounded-2xl
                  overflow-hidden
                  border border-white/40 dark:border-neutral-700
                  shadow-2xl
                  transform
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:-rotate-1
                  animate-float
                "
              >
                <img
                  // src="/hero-ai-illustration.png"
                  src="/assets/image/me.png"
                  alt="Prashant Kumar Skills & Experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SkillMarquee />
        </div>
      </div>
    </section>
  );
}
