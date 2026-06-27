import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "prashantsin2gh@gmail.com",
    href: "mailto:prashantsin2gh@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/prashantkumar-sde",
    href: "https://linkedin.com/in/prashantkumar-sde",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Prashant9155",
    href: "https://github.com/Prashant9155",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="rounded-[32px] border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">

        <div className="grid lg:grid-cols-[1.2fr_420px]">

          {/* Left */}

          <div className="p-10 md:p-14">

            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/20 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for Full-Time Opportunities
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Let's build
              <br />
              something impactful.
            </h2>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
              I'm currently looking for Full-Stack and Frontend Engineering
              opportunities where I can contribute to building scalable
              products, solve meaningful engineering problems and continue
              growing in AI-powered application development.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">

              <span className="rounded-full bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-sm">
                📍 Patna, India
              </span>

              <span className="rounded-full bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-sm">
                🚀 Immediate Joiner
              </span>

              <span className="rounded-full bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-sm">
                🌍 Open to Relocation
              </span>

            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-4 text-white font-medium"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

          {/* Right */}

          <div className="border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-950/50 p-10">

            <h3 className="text-xl font-semibold mb-8">
              Get in Touch
            </h3>

            <div className="space-y-4">

              {LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="group flex items-center justify-between rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:border-blue-400 transition-all"
                  >
                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        <Icon
                          size={20}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>

                      <div>
                        <p className="font-medium">
                          {item.label}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.value}
                        </p>
                      </div>

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-gray-400 group-hover:text-blue-600 transition-colors"
                    />

                  </a>
                );
              })}

            </div>

            <div className="mt-10 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 p-6">

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="text-blue-600 mt-1"
                />

                <div>

                  <h4 className="font-semibold mb-2">
                    Preferred Locations
                  </h4>

                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Bengaluru • Noida • Gurugram • Remote
                  </p>

                </div>

              </div>

            </div>

            <p className="text-center text-xs text-gray-500 mt-8">
              Usually responds within 24 hours.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}