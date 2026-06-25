const projects = [
{
id: "nextround-ai",


name: "NextRound AI",

type: "Personal Project",

status: "Active",

featured: true,

duration: "2025 – Present",

role: "Full-Stack Developer",

description:
  "NextRound AI is an AI-powered interview preparation platform that helps job seekers practice interviews, analyse resumes, receive AI-generated feedback and prepare for technical interviews.",

purpose: `


The goal of NextRound AI is to create an intelligent interview preparation platform that combines AI with structured learning.

The platform focuses on helping candidates improve their interview performance through mock interviews, resume analysis, personalised feedback and progress tracking.
`,


responsibilities: [
  "Designed complete frontend architecture.",
  "Developed reusable UI components.",
  "Implemented authentication flow.",
  "Integrated Groq and Ollama based AI.",
  "Built protected dashboard.",
  "Created analytics dashboard.",
  "Implemented Redux Toolkit state management.",
  "Designed scalable folder structure.",
  "Integrated backend APIs.",
  "Developed responsive UI.",
  "Implemented JWT authentication."
],

architecture: {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS"
  ],

  backend: [
    "Node.js",
    "Express.js"
  ],

  database: [
    "PostgreSQL"
  ],

  ai: [
    "Groq",
    "Ollama",
    "LLMs"
  ],

  deployment: [
    "Docker",
    "AWS",
    "Vercel"
  ]
},

features: [
  "AI Mock Interviews",
  "Resume Analysis",
  "Interview Dashboard",
  "Authentication",
  "Protected Routes",
  "Performance Analytics",
  "Interview History",
  "Feedback Reports",
  "Progress Tracking"
],

challenges: [
  "Designing scalable project architecture.",
  "Managing application state efficiently.",
  "Integrating AI responses.",
  "Creating reusable component system.",
  "Optimising dashboard rendering."
],

learnings: [
  "AI Integration",
  "Prompt Engineering",
  "Backend Architecture",
  "Redux Toolkit",
  "Scalable Folder Structure"
]


},

{
id: "deployment-platform",


name: "Cloud Deployment Platform",

type: "Personal Project",

status: "Active",

featured: true,

role: "Full-Stack Developer",

description:
  "A deployment management platform that automates application deployment, Docker image management and deployment monitoring.",

purpose:
  "To understand deployment pipelines and cloud infrastructure while building a modern DevOps dashboard.",

responsibilities: [
  "Built deployment dashboard.",
  "Designed backend APIs.",
  "Integrated Docker workflow.",
  "Implemented authentication.",
  "Designed PostgreSQL schema.",
  "Created deployment status monitoring."
],

technologies: [
  "React.js",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "JWT",
  "AWS"
],

features: [
  "Application Deployment",
  "Deployment Status",
  "Docker Integration",
  "Authentication",
  "Project Management"
],

learnings: [
  "Docker",
  "Backend APIs",
  "Cloud Deployment",
  "Authentication"
]


},

{
id: "elympiad",


name: "Elympiad",

type: "Professional Project",

company: "Indiclancers Technology Pvt. Ltd.",

role: "Software Engineer",

description:
  "A production-ready online examination and quiz platform used by educational institutions for conducting competitive assessments and managing students.",

responsibilities: [
  "Built Admin Dashboard.",
  "Developed reusable React components.",
  "Integrated REST APIs.",
  "Implemented Firebase Authentication.",
  "Built leaderboard modules.",
  "Created quiz management screens.",
  "Worked on student management.",
  "Fixed production bugs.",
  "Improved application performance."
],

technologies: [
  "React.js",
  "JavaScript",
  "Redux Toolkit",
  "Firebase",
  "REST APIs",
  "HTML",
  "CSS"
],

highlights: [
  "Real-time quiz management.",
  "Production deployment.",
  "Dashboard development.",
  "Reusable components.",
  "Responsive design."
]


},

{
id: "maideaze",


name: "Maideaze",

type: "Professional Project",

company: "Indiclancers Technology Pvt. Ltd.",

role: "Software Engineer",

description:
  "A service management platform for managing domestic service operations, bookings and attendance.",

responsibilities: [
  "Attendance Dashboard",
  "Booking Dashboard",
  "Firebase Integration",
  "Responsive UI",
  "REST API Integration"
],

technologies: [
  "React.js",
  "Firebase",
  "JavaScript"
]


},

{
id: "wildflower",


name: "WildflowerLabs",

type: "Professional Project",

company: "Indiclancers Technology Pvt. Ltd.",

role: "Software Engineer",

description:
  "A climate-tech platform built with Next.js focusing on SEO, CMS integration and responsive frontend architecture.",

responsibilities: [
  "Next.js development",
  "Responsive UI",
  "CMS Integration",
  "SEO optimisation",
  "Interactive charts"
],

technologies: [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS"
]


}
];

export const recruiterQuestions = [
"Tell me about NextRound AI.",
"Explain your best project.",
"Which project are you most proud of?",
"What challenges did you solve?",
"How did you integrate AI?",
"Explain Elympiad.",
"Which project used Docker?",
"Which project used PostgreSQL?",
"Which project used Firebase?",
"Which project used Next.js?",
"What architecture did you use?",
"Which project demonstrates backend skills?",
"What was your biggest learning?",
"Which project is currently active?",
"Describe your project workflow.",
"How do your personal projects complement your professional experience?"
];

export default projects;
