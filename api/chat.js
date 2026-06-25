import { generateResponse } from "../src/ai/rag.js";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,POST"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        message: "Question is required",
      });
    }
    //  eslint-disable-next-line
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        message: "Groq API key is missing",
      });
    }

    const result = await generateResponse({
      question: message.trim(),
      history,
    });

    if (!result.success) {
      return res.status(500).json({
        message: result.answer,
      });
    }

    return res.status(200).json({
      response: result.answer,

      sources: result.context
        ? result.context
            .split("---------------")
            .slice(0, 5)
        : [],
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error:
        //eslint-disable-next-line
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
}