import profile from "./profile.js";
import experience from "./experience.js";
import education from "./education.js";
import skills from "./skills.js";
import projects from "./projects.js";
import achievements from "./achievements.js";
import interview from "./interview.js";

export const knowledgeDocuments = [
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
    id: "education",
    title: "Education",
    category: "education",
    content: education,
  },
  {
    id: "skills",
    title: "Technical Skills",
    category: "skills",
    content: skills,
  },
  {
    id: "projects",
    title: "Projects",
    category: "projects",
    content: projects,
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

export default knowledgeDocuments;