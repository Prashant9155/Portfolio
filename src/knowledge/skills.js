const skills = {
  frontend: {
    title: "Frontend Development",

    experience: "3+ Years",

    summary: `
Frontend development is Prashant's strongest area of expertise.

He has built production-grade dashboards, enterprise applications, AI platforms and responsive web applications using React.js and modern frontend technologies.

His primary focus has been writing reusable, maintainable and scalable UI architecture.
`,

    technologies: [
      {
        name: "React.js",

        proficiency: "Expert",

        experience: "3+ Years",

        usedIn: [
          "Elympiad",
          "Maideaze",
          "WildflowerLabs",
          "NextRound AI",
          "Cloud Deployment Platform",
        ],

        concepts: [
          "Hooks",
          "Custom Hooks",
          "Context API",
          "Redux Toolkit",
          "Lazy Loading",
          "Memoization",
          "Component Architecture",
          "Performance Optimization",
          "Reusable Components",
          "Code Splitting",
        ],
      },

      {
        name: "Next.js",

        proficiency: "Advanced",

        usedIn: ["WildflowerLabs", "NextRound AI"],

        concepts: [
          "SSR",
          "SSG",
          "SEO",
          "App Router",
          "Layouts",
          "Server Components",
          "Client Components",
        ],
      },

      {
        name: "JavaScript",

        proficiency: "Expert",

        concepts: [
          "ES6+",
          "Promises",
          "Closures",
          "Event Loop",
          "Async Await",
          "Modules",
          "DOM",
          "Hoisting",
        ],
      },

      {
        name: "TypeScript",

        proficiency: "Advanced",

        concepts: ["Interfaces", "Types", "Generics", "Enums", "Utility Types"],
      },

      {
        name: "Redux Toolkit",

        proficiency: "Advanced",

        concepts: [
          "Slices",
          "Async Thunk",
          "Store",
          "Selectors",
          "State Management",
        ],
      },

      {
        name: "Tailwind CSS",

        proficiency: "Advanced",
      },
    ],
  },

  backend: {
    title: "Backend Development",

    summary: `
Alongside frontend development, Prashant has been expanding his backend expertise through full-stack projects and API development.

He is comfortable building REST APIs, authentication systems and scalable backend architecture using Node.js.
`,

    technologies: [
      {
        name: "Node.js",

        proficiency: "Advanced",

        usedIn: ["NextRound AI", "Cloud Deployment Platform"],
      },

      {
        name: "Express.js",

        proficiency: "Advanced",
      },

      {
        name: "REST API",

        proficiency: "Advanced",
      },

      {
        name: "JWT Authentication",

        proficiency: "Advanced",
      },

      {
        name: "WebSocket",

        proficiency: "Intermediate",
      },

      {
        name: "GraphQL",

        proficiency: "Basic",
      },
    ],
  },

  database: {
    technologies: [
      {
        name: "PostgreSQL",

        proficiency: "Advanced",
      },

      {
        name: "MongoDB",

        proficiency: "Intermediate",
      },

      {
        name: "Firebase",

        proficiency: "Advanced",
      },

      {
        name: "Firebase Realtime Database",

        proficiency: "Advanced",
      },
    ],
  },

  devops: {
    technologies: [
      {
        name: "Docker",

        proficiency: "Intermediate",
      },

      {
        name: "AWS",

        proficiency: "Intermediate",
      },

      {
        name: "Vercel",

        proficiency: "Advanced",
      },

      {
        name: "Git",

        proficiency: "Advanced",
      },

      {
        name: "GitHub",

        proficiency: "Advanced",
      },

      {
        name: "CI/CD",

        proficiency: "Intermediate",
      },
    ],
  },

  ai: {
    summary: `
Prashant has recently been building AI-powered applications by integrating Large Language Models into personal projects.

His focus has been practical AI integration rather than model training.
`,

    technologies: [
      {
        name: "Groq",

        proficiency: "Advanced",
      },

      {
        name: "Ollama",

        proficiency: "Advanced",
      },

      {
        name: "Prompt Engineering",

        proficiency: "Advanced",
      },

      {
        name: "RAG",

        proficiency: "Learning and Building",
      },

      {
        name: "LangChain",

        proficiency: "Learning",
      },
    ],
  },

  recruiterFAQs: [
    {
      question: "What is Prashant's strongest skill?",

      answer:
        "React.js and modern frontend architecture are Prashant's strongest areas. Over the last three years he has built multiple production-grade applications while continuously expanding into backend development and AI integration.",
    },

    {
      question: "Is he a Full-Stack Developer?",

      answer:
        "Yes. His professional background is frontend-heavy, but he has also built backend APIs, authentication systems, PostgreSQL databases and AI-powered applications using Node.js.",
    },

    {
      question: "Does he know AI?",

      answer:
        "Yes. He has integrated Groq, Ollama and Large Language Models into personal applications and is currently building Retrieval-Augmented Generation (RAG) systems.",
    },

    {
      question: "What technologies is he most confident in?",

      answer:
        "React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js, PostgreSQL, Tailwind CSS and Redux Toolkit.",
    },
  ],
};

export default skills;
