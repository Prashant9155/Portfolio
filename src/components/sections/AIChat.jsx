import { useEffect, useRef, useState } from "react";
import {
  Bot,
  BrainCircuit,
  Database,
  Search,
  Send,
  Sparkles,
  User,
  Workflow,
} from "lucide-react";

const SUGGESTIONS = [
  "Give me a 30 second summary",
  "Why should I hire Prashant?",
  "Explain NextRound AI architecture",
  "Tell me about the Elympiad project",
  "Compare professional work vs personal projects",
  "What AI technologies has he worked with?",
];

const INITIAL_MESSAGE = {
  id: "welcome",
  role: "ai",
  text: `👋 Welcome!

I'm Prashant's AI Recruiter Assistant.

Unlike a traditional chatbot, I answer using a Retrieval-Augmented Generation (RAG) pipeline built from Prashant's portfolio, projects, professional experience and technical knowledge.

Things you can ask:

• Professional Experience
• Personal Projects
• Architecture Decisions
• AI & LLM Work
• Technical Skills
• Career Journey

Try one of the recruiter questions below.`,
};

const PIPELINE = [
  {
    icon: Database,
    title: "Knowledge",
  },
  {
    icon: Search,
    title: "Retrieve",
  },
  {
    icon: Workflow,
    title: "RAG",
  },
  {
    icon: BrainCircuit,
    title: "Groq",
  },
];

function createMessageId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

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

    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  }, [messages]);

  const sendMessage = async (value = input) => {
    const messageText = value?.trim();

    if (!messageText || loading) {
      return;
    }

    hasInteracted.current = true;
    setShowSuggestions(false);
    setLoading(true);

    const userMessage = {
      id: createMessageId(),
      role: "user",
      text: messageText,
    };

    const typingMessage = {
      id: createMessageId(),
      role: "ai",
      typing: true,
    };

    setMessages((prev) => [...prev, userMessage, typingMessage]);
    setInput("");

    try {
      const history = messages
        .filter((message) => message.id !== INITIAL_MESSAGE.id)
        .map(({ role, text }) => ({ role, text }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          history,
        }),
      });

      const data = await response.json();
      const answer =
        data.response || data.message || "I couldn't generate a response right now.";
      const sources = Array.isArray(data.sources) ? data.sources : [];

      setMessages((prev) =>
        prev
          .filter((message) => message.id !== typingMessage.id)
          .concat({
            id: createMessageId(),
            role: "ai",
            text: answer,
            sources,
          })
      );
    } catch {
      setMessages((prev) =>
        prev
          .filter((message) => message.id !== typingMessage.id)
          .concat({
            id: createMessageId(),
            role: "ai",
            text: "I’m having trouble reaching the assistant right now. Please try again in a moment.",
          })
      );
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section
      id="ai-chat"
      className="py-24 border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="max-w-3xl mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-4">
            AI Recruiter Assistant
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Interview me before
            <br />
            you interview me.
          </h2>

          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            Ask anything about my professional experience, engineering decisions,
            projects, AI work, architecture or technical skills. Responses are
            generated using a Retrieval-Augmented Generation (RAG) pipeline built
            from my personal knowledge base.
          </p>
        </div>

        {/* Pipeline */}

        <div className="mb-12">
          <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {PIPELINE.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex items-center gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        <Icon
                          size={22}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>

                      <span className="mt-3 text-sm font-medium">{step.title}</span>
                    </div>

                    {index !== PIPELINE.length - 1 && (
                      <div className="hidden md:block text-gray-400 text-xl">→</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Chat */}

        <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          {/* Top Bar */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-6 py-5 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Bot size={22} className="text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">AI Recruiter Assistant</h3>
                <p className="text-sm text-gray-500">
                  Powered by RAG • LangChain • Groq
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/20 px-3 py-1 text-xs font-medium text-green-600">
                <Sparkles size={13} />
                Knowledge Base Ready
              </span>
            </div>
          </div>

          {/* Suggestions */}

          {showSuggestions && (
            <div className="px-6 py-5 border-b border-gray-200 dark:border-neutral-800">
              <p className="text-sm font-medium mb-4 text-gray-600 dark:text-gray-300">
                Suggested recruiter questions
              </p>

              <div className="flex flex-wrap gap-3">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    disabled={loading}
                    className="rounded-full border border-gray-200 dark:border-neutral-700 px-4 py-2 text-sm transition-all hover:border-blue-500 hover:text-blue-600 disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}

          <div className="min-h-160 max-h-160 overflow-y-auto p-6 flex flex-col gap-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "ai" && (
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                    <Bot size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] ${
                    message.role === "user" ? "order-1" : ""
                  }`}
                >
                  {message.typing ? (
                    <div className="rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={16} className="text-blue-600" />
                        <span className="font-medium">AI is thinking...</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                          Searching knowledge base...
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                          Retrieving relevant documents...
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Generating response...
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`rounded-2xl border px-5 py-4 leading-8 whitespace-pre-wrap ${
                        message.role === "user"
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700"
                      }`}
                    >
                      {message.text}
                    </div>
                  )}

                  {!message.typing && message.role === "ai" && message.sources?.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                        Knowledge Sources
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {message.sources.map((source) => (
                          <span
                            key={source}
                            className="px-3 py-1 rounded-full text-xs border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                          >
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {message.role === "user" && (
                  <div className="w-10 h-10 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center shrink-0">
                    <User size={18} className="text-white dark:text-black" />
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Composer */}

          <div className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50/60 dark:bg-neutral-950/40">
            {/* Footer */}

            <div className="px-6 pt-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5">
                  <Database size={13} />
                  Knowledge Base
                </div>

                <div className="flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5">
                  <Workflow size={13} />
                  RAG Pipeline
                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-50 dark:bg-green-900/20 px-3 py-1.5">
                  <BrainCircuit size={13} />
                  Groq Llama 3.3
                </div>
              </div>
            </div>

            {/* Input */}

            <div className="p-6">
              <div className="rounded-2xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 overflow-hidden">
                <textarea
                  ref={inputRef}
                  rows={2}
                  value={input}
                  disabled={loading}
                  placeholder="Ask about projects, architecture, technical decisions, AI engineering..."
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full resize-none bg-transparent px-5 pt-5 outline-none text-[15px] leading-7 placeholder:text-gray-400"
                />

                <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 dark:border-neutral-800">
                  <div className="text-xs text-gray-400">
                    Press <kbd className="px-2 py-1 rounded bg-gray-100 dark:bg-neutral-800 border">Enter</kbd> to send
                  </div>

                  <button
                    type="button"
                    disabled={loading || !input.trim()}
                    onClick={() => sendMessage()}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Sparkles size={17} className="animate-pulse" />
                        Thinking...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Note */}

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                <p>
                  Responses are generated using Retrieval-Augmented Generation (RAG)
                  over Prashant's personal knowledge base.
                </p>

                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-yellow-500" />
                  Built with React • LangChain • Groq
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

