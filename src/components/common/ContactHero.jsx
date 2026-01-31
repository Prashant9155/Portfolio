export default function ContactHero() {
  return (
    <div className="max-w-3xl mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
        Get in Touch
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
        I’m open to frontend and full-stack roles, freelance projects, and
        long-term collaborations. The fastest way to reach me is via the
        contact form or WhatsApp.
      </p>

      {/* Availability */}
      <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-3">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Available for new opportunities · Response within 24 hours
        </span>
      </div>
    </div>
  );
}
