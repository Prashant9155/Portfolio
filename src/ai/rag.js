import Groq from "groq-sdk";
import { retrieveContext } from "./retriever.js";
import { buildPrompt } from "./promptBuilder.js";

const groq = new Groq({
    // eslint-disable-next-line
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateResponse({
  question,
  history = [],
}) {
  try {
    // Step 1: Retrieve relevant context
    const context = await retrieveContext(question);

    // Step 2: Build prompt
    const messages = buildPrompt({
      question,
      context,
      history,
    });

    // Step 3: Call Groq
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.3,
      max_tokens: 500,
    });

    return {
      success: true,
      answer:
        completion.choices?.[0]?.message?.content ??
        "Sorry, I couldn't generate a response.",
      context,
    };
  } catch (error) {
    console.error("RAG Error:", error);

    return {
      success: false,
      answer:
        "Sorry, something went wrong while generating the response.",
      context: "",
    };
  }
}