import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Phone,
  MapPin,
} from "lucide-react";
import ContactForm from "../components/common/ContactForm";

export default function Contact() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            I’m open to frontend and full-stack roles, freelance projects, and
            long-term collaborations. The fastest way to reach me is via
            WhatsApp or email.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-10">
            {/* AVAILABILITY */}
            <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Availability
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Currently open to new opportunities and freelance work.
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                Typical response time: within 24 hours
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:prashantsin2gh@gmail.com"
                  className="hover:underline"
                >
                  prashantsin2gh@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="https://wa.me/919155729247"
                  target="_blank"
                  className="hover:underline"
                >
                  +91 91557 29247 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT – SOCIAL LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Find me online
            </h3>

            <div className="grid grid-cols-2 gap-6 max-w-sm">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prashantkumar-sde"
                target="_blank"
                aria-label="LinkedIn"
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-white dark:bg-neutral-900
                  border border-gray-200 dark:border-neutral-800
                  hover:shadow-lg transition
                "
              >
                <Linkedin className="text-blue-600" />
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Prashant9155"
                target="_blank"
                aria-label="GitHub"
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-white dark:bg-neutral-900
                  border border-gray-200 dark:border-neutral-800
                  hover:shadow-lg transition
                "
              >
                <Github className="text-gray-800 dark:text-gray-200" />
                <span className="font-medium">GitHub</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919155729247"
                target="_blank"
                aria-label="WhatsApp"
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-white dark:bg-neutral-900
                  border border-gray-200 dark:border-neutral-800
                  hover:shadow-lg transition
                "
              >
                <Phone className="text-green-600" />
                <span className="font-medium">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                className="
                  flex items-center gap-4 p-4 rounded-xl
                  bg-white dark:bg-neutral-900
                  border border-gray-200 dark:border-neutral-800
                  hover:shadow-lg transition
                "
              >
                <Instagram className="text-pink-600" />
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-28 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Have a project or role in mind?
          </p>

          <a
            href="mailto:prashantsin2gh@gmail.com"
            className="
              inline-block mt-4
              px-8 py-4 rounded-lg
              bg-linear-to-r from-blue-600 to-purple-600
              text-white font-medium
              hover:opacity-90 transition
            "
          >
            Let’s talk
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
