import { Bot, Sparkles } from "lucide-react";

function scrollToAI() {
  const el = document.getElementById("ai-chat");

  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function FloatingAIButton() {
  return (
    <button
      onClick={scrollToAI}
      aria-label="Open AI Recruiter Assistant"
      className="
        group
        fixed
        md:bottom-6
        md:right-6
        bottom-2
        right-2
        z-100
        flex
        items-center
        gap-2
        rounded-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        shadow-xl
        transition-all
        duration-100
        hover:scale-105
        animate-pulse
      "
    >
      <div className="flex items-center justify-center w-12 h-13">
        <Bot size={24} />
      </div>

      <div
        className="
          overflow-hidden
          max-w-0
          group-hover:max-w-45
          transition-all
          duration-300
          whitespace-nowrap
        "
      >
        <div className="pr-5 flex items-center gap-2 font-medium">
          <Sparkles size={16} />
          Ask AI
        </div>
      </div>
    </button>
  );
}