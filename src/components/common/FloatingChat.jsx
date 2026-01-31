import { useState, useRef, useEffect } from "react";
import { MessageCircle, Linkedin, X } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {/* CHAT BOX */}
      {open && (
        <div
          className="
            mb-4 w-80 h-48
            rounded-2xl
            bg-white dark:bg-neutral-900
            border border-gray-200 dark:border-neutral-800
            shadow-2xl
            p-5
            animate-fade-in
          "
        >
          {/* HEADER */}
          <div className="flex items-start justify-between mb-4">
            <div className="mt-5">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Let’s connect 👋
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Feel free to message me on LinkedIn
              </p>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                p-1.5 rounded-full
                text-gray-600 dark:text-gray-400
                hover:bg-gray-100 dark:hover:bg-neutral-800
                transition
              "
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* CTA */}
          <a
            href="https://www.linkedin.com/in/prashantkumar-sde"
            target="_blank"
            className="
              flex items-center justify-center gap-2 
              w-full px-4 py-3 rounded-lg
              bg-linear-to-r from-blue-600 to-purple-600
              text-white font-medium
              hover:opacity-90 transition
            "
          >
            <Linkedin size={18} />
            Message on LinkedIn
          </a>
        </div>
      )}

      {/* FLOATING BUTTON (HIDDEN WHEN OPEN) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            h-14 w-14 rounded-full
            bg-linear-to-r from-blue-600 to-purple-600
            text-white
            flex items-center justify-center
            shadow-lg
            hover:scale-110
            transition-all duration-300
          "
          aria-label="Chat"
        >
          <MessageCircle />
        </button>
      )}
    </div>
  );
}
