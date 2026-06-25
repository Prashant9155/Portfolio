import profile from "./profile";
import experience from "./experience";
import projects from "./projects";
import skills from "./skills";
import education from "./education";
import achievements from "./achievements";
import interview from "./interview";

export const knowledgeBase = {
  profile,
  experience,
  projects,
  skills,
  education,
  achievements,
  interview,
};

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

export default knowledgeBase;