import { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";

const SUGGESTIONS = [
"Summarize Prashant in 30 seconds",
"What are his strongest technical skills?",
"Tell me about NextRound AI",
"Why should I interview him?",
"Is he available immediately?",
"Explain his React experience",
];

const INITIAL_MESSAGE = {
id: "welcome",
role: "ai",
text: `👋 Welcome!

I'm Prashant's AI recruiter assistant.

I can answer questions about:

• Professional Experience
• Technical Skills
• Projects
• Availability
• Career Highlights

Try one of the suggested questions below.`,
};

export default function AIChat() {
const [messages, setMessages] = useState([INITIAL_MESSAGE]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);
const [showSuggestions, setShowSuggestions] = useState(true);

const bottomRef = useRef(null);
const inputRef = useRef(null);
const hasInteracted = useRef(false);

useEffect(() => {
if (!hasInteracted.current) return;


bottomRef.current?.scrollIntoView({
  behavior: "smooth",
  block: "end",
});


}, [messages]);

async function send(question) {
const text = (question || input).trim();


if (!text || loading) return;

hasInteracted.current = true;

const userId = crypto.randomUUID();
const typingId = crypto.randomUUID();

setInput("");
setShowSuggestions(false);
setLoading(true);

setMessages((prev) => [
  ...prev,
  {
    id: userId,
    role: "user",
    text,
  },
  {
    id: typingId,
    role: "ai",
    typing: true,
  },
]);

try {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: text,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  setMessages((prev) =>
    prev
      .filter((m) => m.id !== typingId)
      .concat({
        id: crypto.randomUUID(),
        role: "ai",
        text: data.response,
      })
  );
} catch (error) {
  console.error("Chat Error:", error);

  setMessages((prev) =>
    prev
      .filter((m) => m.id !== typingId)
      .concat({
        id: crypto.randomUUID(),
        role: "ai",
        text: "Sorry, I couldn't generate a response right now. Please try again in a moment.",
      })
  );
} finally {
  setLoading(false);
  inputRef.current?.focus();
}


}

function handleKeyDown(e) {
if (e.key === "Enter" && !e.shiftKey) {
e.preventDefault();
send();
}
}

return ( <section id="ai-chat" className="mb-24"> <div className="mb-8"> <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
AI Assistant </p>


    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
      Ask About Prashant
    </h2>

    <p className="max-w-2xl text-gray-500 dark:text-gray-400">
      AI-powered recruiter assistant built using Groq and Llama 3.3. Ask
      about experience, projects, technical skills, architecture decisions,
      or availability.
    </p>
  </div>

  <div className="rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
          <Bot size={18} />
        </div>

        <div>
          <h3 className="font-semibold">
            AI Recruiter Assistant
          </h3>

          <p className="text-xs text-gray-500">
            Experience • Projects • Skills • Availability
          </p>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-green-100 dark:bg-green-900/20 text-green-600">
        <Sparkles size={12} />
        Llama 3.3 • Groq
      </div>
    </div>

    <div className="h-125 overflow-y-auto p-6 flex flex-col gap-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex gap-3 ${
            msg.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          {msg.role === "ai" && (
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
              <Bot size={14} />
            </div>
          )}

          <div className="max-w-[80%]">
            {msg.typing ? (
              <div className="px-4 py-3 rounded-2xl border border-gray-200 dark:border-neutral-700 text-sm text-gray-500">
                Thinking...
              </div>
            ) : (
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
                }`}
              >
                {msg.text}
              </div>
            )}
          </div>

          {msg.role === "user" && (
            <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center shrink-0">
              <User
                size={14}
                className="text-white dark:text-black"
              />
            </div>
          )}
        </div>
      ))}

      <div ref={bottomRef} />
    </div>

    {showSuggestions && (
      <div className="px-6 pb-5">
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => send(suggestion)}
              disabled={loading}
              className="px-4 py-2 rounded-full border border-gray-200 dark:border-neutral-700 text-sm hover:border-blue-500 hover:text-blue-600 disabled:opacity-50"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    )}

    <div className="flex gap-3 p-5 border-t border-gray-200 dark:border-neutral-800">
      <input
        ref={inputRef}
        type="text"
        value={input}
        disabled={loading}
        placeholder="Ask about experience, projects, skills..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-transparent outline-none focus:border-blue-500"
      />

      <button
        type="button"
        onClick={() => send()}
        disabled={loading || !input.trim()}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        Send
      </button>
    </div>
  </div>
</section>


);
}
