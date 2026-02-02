const projects = [
  {
    id: "dev",
    type: "website",
    title: "Developer Platform",
    liveUrl: "https://devshilpeearchitects.com",
    screenshots: [
      "/assets/screenshots/dev/dev1.png",
      "/assets/screenshots/dev/dev2.png",
      "/assets/screenshots/dev/dev3.png",
      "/assets/screenshots/dev/dev4.png",
    ],
    description:
      "A developer-focused website showcasing tools, services, and technical offerings.",
    responsibilities: [
      "Built responsive layouts using React and Tailwind CSS",
      "Created reusable UI components",
      "Ensured cross-device compatibility",
    ],
    tech: ["React", "Tailwind CSS", "Vite"],
  },

  {
    id: "elympiad",
    type: "website",
    title: "Elympiad Website",
    liveUrl: "https://elympiad.com",
    screenshots: [
      "/assets/screenshots/elympiad/e1.png",
      "/assets/screenshots/elympiad/e2.png",
      "/assets/screenshots/elympiad/e3.png",
      "/assets/screenshots/elympiad/e4.png",
      "/assets/screenshots/elympiad/e5.png",
      "/assets/screenshots/elympiad/e6.png",
      "/assets/screenshots/elympiad/e7.png",
    ],
    description:
      "Public-facing website for an ed-tech platform with a focus on clarity and usability.",
    responsibilities: [
      "Developed page layouts and UI components",
      "Optimized performance and responsiveness",
      "Worked closely with designers and backend teams",
    ],
    tech: ["React", "Tailwind CSS"],
  },

  {
    id: "kit",
    type: "website",
    title: "UI Kit Website",
    liveUrl: "https://indicstartupkit.com/",
    screenshots: [
      "/assets/screenshots/kit/k.png",
      "/assets/screenshots/kit/kit1.png",
      "/assets/screenshots/kit/kit2.png",
      "/assets/screenshots/kit/kit3.png",
      "/assets/screenshots/kit/kit4.png",
      "/assets/screenshots/kit/kit5.png",
      "/assets/screenshots/kit/kit6.png",
      "/assets/screenshots/kit/kit7.png",
    ],
    description:
      "A UI component kit and design system demo website.",
    responsibilities: [
      "Created reusable UI components",
      "Maintained consistent spacing and typography",
      "Focused on scalable UI architecture",
    ],
    tech: ["React", "Tailwind CSS"],
  },

  {
    id: "maideaze",
    type: "website",
    title: "Maideaze",
    liveUrl: "https://maideaze.com",
    screenshots: [
      "/assets/screenshots/maideaze/maideaze1.png",
      "/assets/screenshots/maideaze/m2.png",
      "/assets/screenshots/maideaze/m3.png",
      "/assets/screenshots/maideaze/m4.png",
      "/assets/screenshots/maideaze/m5.png",
    ],
    description:
      "Service-based website built with a clean, modular UI approach.",
    responsibilities: [
      "Implemented responsive UI using Tailwind CSS",
      "Built modular React components",
      "Ensured clean layout and navigation",
    ],
    tech: ["React", "Tailwind CSS"],
  },

  {
    id: "namasvi",
    type: "website",
    title: "Namasvi",
    liveUrl: "https://namasvinexus.com/",
    video: "/assets/videos/namasvi.mp4",
    screenshots: [
      "/assets/screenshots/namasvi/n1.png",
      "/assets/screenshots/namasvi/n2.png",
      "/assets/screenshots/namasvi/n3.png",
      "/assets/screenshots/namasvi/n4.png",
      "/assets/screenshots/namasvi/n5.png",
    ],
    description:
      "Brand-oriented website focused on visual consistency and responsive design.",
    responsibilities: [
      "Developed responsive layouts",
      "Maintained brand consistency across pages",
      "Optimized UI for multiple screen sizes",
    ],
    tech: ["React", "Tailwind CSS"],
  },

  {
    id: "solidwealth",
    type: "website",
    title: "Solid Wealth",
    liveUrl: "https://solidwealth.in",
    video: "/assets/videos/solidWealth.mp4",
    screenshots: [
      "/assets/screenshots/solidWealth/s1.png",
      "/assets/screenshots/solidWealth/s2.png",
      "/assets/screenshots/solidWealth/s3.png",
      "/assets/screenshots/solidWealth/s4.png",
    ],
    description:
      "Fintech marketing website with CMS-driven content and optimized performance.",
    responsibilities: [
      "Built responsive UI using React and Tailwind",
      "Integrated Firebase as a lightweight CMS",
      "Optimized performance and accessibility",
    ],
    tech: ["React", "Tailwind CSS", "Firebase"],
  },

  {
    id: "wild",
    type: "website",
    title: "Wild",
    liveUrl: "https://wildflowerlabs.earth/",
    screenshots: [
      "/assets/screenshots/wild/wi1.png",
      "/assets/screenshots/wild/wi3.png",
    ],
    description:
      "Creative marketing website with bold visuals and smooth UI interactions.",
    responsibilities: [
      "Implemented responsive layouts",
      "Handled UI animations and transitions",
      "Optimized images and assets",
    ],
    tech: ["React", "Tailwind CSS"],
  },

 /* =========================
   DASHBOARD PROJECTS
   ========================= */

{
  id: "elympiad-dashboard",
  type: "dashboard",
  title: "Elympiad Admin Dashboard",
  liveUrl: "https://admin.elympiad.in",
  video: "/assets/videos/elympiad.mp4",
  description:
    "A role-based admin dashboard used to manage quizzes, users, and real-time competition data.",
  responsibilities: [
    "Designed and implemented a scalable dashboard layout system",
    "Built reusable UI components for tables, filters, and forms",
    "Implemented role-based UI access for admins and moderators",
    "Integrated REST APIs for quiz, user, and result management",
    "Handled loading states, error handling, and edge cases",
  ],
  tech: ["React", "Redux Toolkit", "Tailwind CSS"],
  caseStudy: {
    overview:
      "The Elympiad Admin Dashboard is an internal tool designed to manage quizzes, users, and live competition workflows efficiently.",
    challenges: [
      "Handling complex UI states across multiple dashboard modules",
      "Ensuring role-based access without duplicating components",
      "Maintaining performance with data-heavy tables",
    ],
    solutions: [
      "Used Redux Toolkit for predictable global state management",
      "Built reusable layout and table components",
      "Optimized rendering using memoization and controlled re-renders",
    ],
    outcome:
      "The dashboard enabled administrators to manage competitions smoothly with a clear, scalable UI architecture.",
  },
},

{
  id: "solidwealth-dashboard",
  type: "dashboard",
  title: "Solid Wealth Internal Dashboard",
  liveUrl: "https://admin.solidwealth.in/",
  video: "/assets/videos/solidWealth.mp4",
  description:
    "An internal dashboard for managing financial content, CMS data, and platform configurations.",
  responsibilities: [
    "Built responsive dashboard views using React and Tailwind CSS",
    "Integrated Firebase-backed CMS data into dashboard panels",
    "Implemented form-based workflows for content updates",
    "Ensured UI consistency across modules",
  ],
  tech: ["React", "Tailwind CSS", "Firebase"],
  caseStudy: {
    overview:
      "This dashboard was built to allow internal teams to manage financial content and configurations without developer intervention.",
    challenges: [
      "Keeping UI simple for non-technical users",
      "Managing dynamic CMS-driven data safely",
    ],
    solutions: [
      "Designed intuitive form-based interfaces",
      "Used Firebase for real-time updates and content management",
    ],
    outcome:
      "Reduced dependency on developers for routine content updates and improved internal workflow efficiency.",
  },
},

{
  id: "maideaze-dashboard",
  type: "dashboard",
  title: "Maideaze Operations Dashboard",
  liveUrl: "https://admin.maideaze.com",
  video: "/assets/videos/maideaze.mp4",
  description:
    "Operational dashboard used to manage service requests, status updates, and internal workflows.",
  responsibilities: [
    "Developed dashboard UI with a focus on clarity and usability",
    "Implemented status-based views and filters",
    "Handled API integration for service lifecycle management",
  ],
  tech: ["React", "Tailwind CSS"],
  caseStudy: {
    overview:
      "The Maideaze dashboard supports internal teams by providing a clear overview of service requests and operational status.",
    challenges: [
      "Presenting complex operational data in a simple way",
      "Maintaining consistency across multiple dashboard views",
    ],
    solutions: [
      "Used reusable UI patterns for lists and filters",
      "Focused on visual hierarchy and spacing",
    ],
    outcome:
      "Improved operational visibility and reduced manual tracking effort.",
  },
},

{
  id: "namasvi-dashboard",
  type: "dashboard",
  title: "Namasvi Content Management Dashboard",
  liveUrl: "https://admin2.namasvinexus.com/",
  video: "/assets/videos/namasvi.mp4",
  description:
    "A lightweight dashboard for managing brand content and media assets.",
  responsibilities: [
    "Built clean and minimal dashboard UI",
    "Implemented content upload and preview flows",
    "Ensured responsive behavior across devices",
  ],
  tech: ["React", "Tailwind CSS"],
  caseStudy: {
    overview:
      "This dashboard allows internal teams to manage brand assets and content efficiently.",
    challenges: [
      "Designing a minimal UI without overwhelming users",
    ],
    solutions: [
      "Used simple layouts and clear action buttons",
    ],
    outcome:
      "Enabled faster content updates with minimal training required.",
  },
},

{
  id: "wild-dashboard",
  type: "dashboard",
  title: "Wild Creative Dashboard",
  liveUrl: "https://dashboard.wildflowerlabs.earth",
  video: "/assets/videos/wild.mp4",
  description:
    "A creative dashboard showcasing internal analytics and content previews.",
  responsibilities: [
    "Implemented responsive dashboard layouts",
    "Handled video and media preview components",
    "Ensured smooth UI interactions",
  ],
  tech: ["React", "Tailwind CSS"],
  caseStudy: {
    overview:
      "The Wild dashboard focuses on presenting creative data and previews in a visually engaging way.",
    challenges: [
      "Balancing aesthetics with usability",
    ],
    solutions: [
      "Used Tailwind utility classes to maintain consistency",
    ],
    outcome:
      "Delivered a visually clean dashboard aligned with the brand’s creative direction.",
  },
},

];

export default projects;

