# 🚀 Prashant Kumar — AI Powered Developer Portfolio

A modern full-stack developer portfolio built with **React, Vite, Tailwind CSS, Groq LLM, and Retrieval-Augmented Generation (RAG)**.

Unlike traditional portfolios, this project includes an **AI Recruiter Assistant** capable of answering questions about my professional experience, projects, technical skills, achievements, and career using a custom knowledge base.

---

# 🌐 Live Demo

**Portfolio:** https://portfolio-prashant-dev.vercel.app/

---

# ✨ Features

* Modern responsive portfolio
* Dark / Light theme
* Project showcase
* Skills section
* Contact section
* AI Recruiter Assistant
* Retrieval-Augmented Generation (RAG)
* Semantic Knowledge Base
* LLM powered by Groq
* Deployed on Vercel
* CI/CD with GitHub

---

# 🛠 Tech Stack

## Frontend

* React 19
* Vite
* Tailwind CSS
* Lucide Icons

## AI

* Groq API
* Llama 3.3 70B Versatile
* LangChain
* RAG Architecture
* Vector Search

## Backend

* Vercel Serverless Functions

---

# 🧠 AI Recruiter Assistant

One of the major highlights of this portfolio is the embedded AI assistant.

Instead of using hardcoded prompts, the assistant retrieves relevant information from a structured knowledge base before generating answers.

This enables recruiters to ask questions naturally, such as:

* Tell me about Prashant.
* Explain his React experience.
* What projects has he worked on?
* Does he know Docker?
* Why should I hire him?
* Tell me about NextRound AI.
* Explain his architecture decisions.
* Is he open to relocation?

---

# 🧩 RAG (Retrieval-Augmented Generation)

The AI Assistant is built using a Retrieval-Augmented Generation pipeline.

Instead of relying only on the language model's memory, the assistant first searches through a custom knowledge base and retrieves the most relevant information before generating a response.

Benefits:

* More accurate answers
* Less hallucination
* Recruiter-focused responses
* Easily extensible knowledge base
* No hardcoded prompt engineering

---

# ⚙️ RAG Pipeline


User Question
        │
        ▼
AI Chat Component
        │
        ▼
Vercel Serverless API
        │
        ▼
Retriever
        │
        ▼
Vector Store
        │
        ▼
Top Relevant Knowledge Chunks
        │
        ▼
Prompt Builder
        │
        ▼
Groq Llama 3.3
        │
        ▼
Final AI Response


---

# 📚 Knowledge Base

The assistant retrieves information from structured documents stored inside:


src/
└── knowledge/


Current knowledge sources include:

* Profile
* Experience
* Skills
* Projects
* Education
* Achievements
* Interview Notes
* FAQ

Adding new information only requires updating these files.

---

# 🏗 AI Architecture


src/
└── ai/
    loader.js
    splitter.js
    embeddings.js
    vectorStore.js
    retriever.js
    promptBuilder.js
    rag.js
    buildVectorStore.js


## loader.js

Loads all knowledge documents.

---

## splitter.js

Splits large documents into semantic chunks for better retrieval.

---

## embeddings.js

Generates embeddings for each chunk.

---

## vectorStore.js

Creates the in-memory vector database.

---

## retriever.js

Finds the most relevant chunks for the user's question.

---

## promptBuilder.js

Builds the final prompt using:

* Retrieved context
* Conversation history
* System instructions

---

## rag.js

Combines retrieval with Groq LLM to produce the final response.

---

# 📂 Project Structure


personal-portfolio/

├── api/
│   └── chat.js
│
├── src/
│   ├── ai/
│   ├── knowledge/
│   ├── components/
│   ├── hooks/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│
├── package.json
└── vite.config.js


---

# 🚀 Installation

Clone the repository

bash
git clone https://github.com/Prashant9155/Portfolio.git


Install dependencies

bash
npm install


Create a `.env` file

env
GROQ_API_KEY=your_groq_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key


Start the development server

bash
npm run dev


---

# 🔥 Deployment

The application is deployed using **Vercel**.

Deployment pipeline:


GitHub Push
      │
      ▼
Vercel CI/CD
      │
      ▼
Automatic Build
      │
      ▼
Production Deployment


Every push to the `main` branch automatically triggers a new deployment.

---

# 📈 Future Improvements

* Persistent conversation memory
* Hybrid search
* PDF Resume Retrieval
* Portfolio Analytics
* Streaming AI responses
* Voice interaction
* Multi-language support
* Recruiter dashboard
* Resume upload & comparison
* AI Interview Mode

---

# 👨‍💻 About Me

I'm a Full-Stack Developer with 3+ years of professional experience building scalable web applications.

My expertise includes:

* React.js
* Next.js
* TypeScript
* Node.js
* Express.js
* PostgreSQL
* MongoDB
* Docker
* AWS
* AI & LLM Applications
* RAG Systems
* LangChain

I'm passionate about combining modern full-stack development with AI to build intelligent user experiences.

---

# 📬 Contact

Email: **[prashantsin2gh@gmail.com](mailto:prashantsin2gh@gmail.com)**

LinkedIn: **https://linkedin.com/in/prashantkumar-sde**

GitHub: **https://github.com/Prashant9155**

---

# 📄 License

This project is licensed under the MIT License.
