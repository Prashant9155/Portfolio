import useTypewriter from "../../hooks/useTypewriter";
import SkillMarquee from "./SkillMarquee";

export default function Hero() {
  const expertise = useTypewriter([
    "Full Stack Web Development",
    "Frontend Development",
    "Web Support",
    "CI / CD Pipelines",
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
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-40 ">
        {/* 12-column grid */}
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* LEFT – 3/4 width */}
          <div className="col-span-12 md:col-span-9">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                Prashant Kumar
              </span>
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Expertise in{" "}
              <span className="text-blue-600 dark:text-purple-400">
                {expertise}
              </span>
              <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I help businesses and teams build scalable, performant, and
              maintainable web applications using modern frontend and backend
              technologies.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/projects"
                className="
                  px-6 py-3 rounded-lg
                  bg-linear-to-r from-blue-600 to-purple-600
                  text-white font-medium
                  hover:opacity-90 transition
                "
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="
                  px-6 py-3 rounded-lg border
                  border-gray-300 dark:border-gray-700
                  text-gray-900 dark:text-gray-200
                  hover:bg-gray-100 dark:hover:bg-neutral-800
                  transition
                "
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT – 1/4 width */}
          <div className="col-span-12 md:col-span-3 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 to-purple-600 blur-xl opacity-30" />

              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80  rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl">
                <img
                  src="/profile-3.jpg"
                  alt="Prashant Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <SkillMarquee />
      </div>
    </section>
  );
}
