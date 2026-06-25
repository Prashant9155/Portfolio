import profile from "./profile.js";
import experience from "./experience.js";
import education from "./education.js";
import skills from "./skills.js";
import projects from "./projects.js";
import achievements from "./achievements.js";
import interview from "./interview.js";


export const knowledgeDocuments = [
  profile,
  experience,
  education,
  skills,
  projects,
  achievements,
  interview,
];

const prifile = [
  {
    id: "profile",
    title: "Professional Profile",
    category: "profile",
    content: profile,
  },

  {
    id: "experience",
    title: "Professional Experience",
    category: "experience",
    content: experience,
  },

  {
    id: "projects",
    title: "Projects",
    category: "projects",
    content: projects,
  },

  {
    id: "skills",
    title: "Technical Skills",
    category: "skills",
    content: skills,
  },

  {
    id: "education",
    title: "Education",
    category: "education",
    content: education,
  },

  {
    id: "achievements",
    title: "Achievements",
    category: "achievements",
    content: achievements,
  },

  {
    id: "interview",
    title: "Interview Knowledge",
    category: "interview",
    content: interview,
  },
];

export default prifile;