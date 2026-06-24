import Groq from "groq-sdk";

const groq = new Groq({
// eslint-disable-next-line
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant embedded in Prashant Kumar's portfolio. Answer questions only about Prashant. Keep answers professional, concise, recruiter-friendly, and maximum 4 sentences.

About Prashant Kumar:
- Role: Full-Stack Developer
- Experience: 3+ Years
- Location: Delhi NCR (Open to Bengaluru & Remote)
- Availability: Open to full-time opportunities, immediate joiner

Technical Skills:
Frontend: React.js, Next.js, JavaScript, TypeScript, Redux Toolkit, Tailwind CSS
Backend: Node.js, Express.js, Prisma, MongoDB, PostgreSQL, Firebase
DevOps: Docker, AWS, CI/CD, Vercel

Notable Projects:
1. NextRound AI - AI-powered project tool
2. Cloud Deployment Platform - Infrastructure automation
3. WildflowerLabs.earth - Environmental project

Stay focused on Prashant's professional experience. Be warm but professional.`;

export default async function handler(req, res) {
  // Enable CORS if needed
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ message: "Question is required" });
    }

    // Validate API key
    // eslint-disable-next-line
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY not set");
      return res.status(500).json({ message: "API configuration error" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.4,
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const response = completion.choices?.[0]?.message?.content;

    if (!response) {
      return res.status(500).json({ message: "No response generated" });
    }

    return res.status(200).json({ response });
  } catch (error) {
    console.error("Chat API Error:", error);

    // Provide more specific error messages
    if (error.status === 401) {
      return res.status(401).json({ message: "API authentication failed - check your Groq API key" });
    }

    if (error.message?.includes("rate_limit")) {
      return res.status(429).json({ message: "Rate limit exceeded. Please try again in a moment." });
    }

    return res.status(500).json({
      message: "Failed to generate response. Please try again.",
      // eslint-disable-next-line
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}