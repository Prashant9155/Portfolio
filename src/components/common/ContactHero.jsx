import { useEffect, useState } from "react";
import { Mail, Clock, Sparkles } from "lucide-react";

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-20 text-center">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 mb-6">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Let's Connect</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
          Get in Touch
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
          I'm open to <span className="font-semibold text-blue-600 dark:text-blue-400">frontend</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack</span> roles,
          freelance projects, and long-term collaborations. Let's discuss how we can work together!
        </p>

        {/* Availability Status */}
        <div className="inline-flex items-center gap-3 rounded-2xl border border-green-200 dark:border-green-800 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available for new opportunities · Response within 24 hours
          </span>
        </div>
      </div>
    </div>
  );
}
