const interview = {
  introduction: {
    short: `
Hi, I'm Prashant Kumar, a Full-Stack Developer with over 3 years of experience building modern web applications using React.js, Next.js, JavaScript and Node.js.

My professional experience has primarily been in frontend engineering, where I've worked on production applications, while in my personal projects I've expanded into backend development, cloud deployment and AI-powered applications.

Currently I'm looking for opportunities where I can contribute as a Full-Stack Developer while continuing to grow in backend systems and AI engineering.
`,

    detailed: `
I am a Full-Stack Developer with more than three years of experience developing production-ready web applications.

I started my professional career in July 2023 as a Software Engineer at Indiclancers Technology where I worked on several production applications including Elympiad, Maideaze and WildflowerLabs.

My primary expertise is React.js, Next.js, JavaScript and TypeScript. Over time I expanded into backend development using Node.js, Express.js and PostgreSQL through personal full-stack projects.

Recently I have been working on AI-powered applications by integrating Groq, Ollama and Retrieval-Augmented Generation (RAG) into my own products.

I'm passionate about building scalable products, writing clean maintainable code and continuously learning modern technologies.
`
  },

  strengths: [
    "React.js development",
    "Frontend architecture",
    "Reusable component design",
    "REST API integration",
    "Full-Stack development",
    "Problem solving",
    "AI integration",
    "Continuous learning"
  ],

  weaknesses: [
    {
      title: "Backend experience",
      answer:
        "My career initially focused on frontend engineering. To strengthen my backend skills I intentionally started building complete full-stack applications using Node.js, PostgreSQL, Docker and AI integrations."
    },
    {
      title: "Perfectionism",
      answer:
        "I sometimes spend extra time refining architecture or code quality. I've improved by balancing engineering quality with delivery timelines."
    }
  ],

  careerGoals: {
    short:
      "To become a highly skilled Full-Stack Engineer capable of building scalable cloud-native applications powered by AI.",

    long:
      "My long-term goal is to work on challenging engineering problems involving distributed systems, cloud architecture and AI-powered applications while continuously improving both technical and leadership skills."
  },

  jobChange: {
    reason:
      "I am looking for opportunities that provide challenging technical work, opportunities to grow as a Full-Stack Engineer and exposure to modern product engineering practices."
  },

  preferredWork: [
    "Product-based companies",
    "Fast-growing startups",
    "AI-powered products",
    "Developer tools",
    "SaaS applications",
    "Scalable web platforms"
  ],

  workStyle: {
    teamwork:
      "Enjoys collaborating with cross-functional teams including designers, backend developers and QA engineers.",

    learning:
      "Believes in learning by building real-world applications.",

    ownership:
      "Takes ownership of features from implementation through deployment and maintenance."
  },

  recruiterQuestions: [
    {
      intent: "tell_me_about_yourself",
      keywords: [
        "introduce yourself",
        "tell me about yourself",
        "introduction",
        "about yourself"
      ],
      answerSource: "introduction.short"
    },
    {
      intent: "strengths",
      keywords: [
        "strengths",
        "best skill",
        "strongest skill"
      ],
      answerSource: "strengths"
    },
    {
      intent: "weakness",
      keywords: [
        "weakness",
        "improvement area"
      ],
      answerSource: "weaknesses"
    },
    {
      intent: "why_hire",
      keywords: [
        "why hire",
        "why should we hire you"
      ],
      answer:
        "Prashant combines strong production React.js experience with growing full-stack and AI expertise. He has built real products, continuously learns modern technologies and enjoys solving challenging engineering problems."
    },
    {
      intent: "career_goal",
      keywords: [
        "career goal",
        "future plan",
        "five years"
      ],
      answerSource: "careerGoals.long"
    }
  ]
};

export default interview;