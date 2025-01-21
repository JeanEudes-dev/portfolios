export interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    live?: string;
    github: string;
  };
}

export const projectsData: Project[] = [
  {
    title: "Personalized AI Chat Assistant",
    description:
      "Developed a professional and user-friendly AI-powered chat assistant using modern technologies and best practices.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "React",
      "Nodejs",
      "Expressjs",
    ],
    links: {
      github: "https://github.com/JeanEudes-dev/dynamiqtec-static",
    },
  },
  {
    title: "CRUD Project with PHP & MySQL",
    description:
      "A simple web-based CRUD (Create, Read, Update, Delete) application with user management, login, and item management functionalities.",
    techStack: ["PHP", "MySQL"],
    links: {
      github: "https://github.com/JeanEudes-dev/crud-project",
    },
  },
  {
    title: "Bookify",
    description:
      "An online platform providing users access to a vast library of books and personalized recommendations. Built with React TypeScript for the frontend and Django REST Framework for the backend.",
    techStack: ["React", "TypeScript", "Django", "Git"],
    links: {
      live: "https://jeaneudes-dev.github.io/Bookify/",
      github: "https://github.com/JeanEudes-dev/Bookify",
    },
  },
  {
    title: "MUSIC WEB: A Spotify Streaming Experience",
    description:
      "A web-based streaming platform using the Spotify Developer API, built with React. Allows users to explore and play music. Accessible at: https://jeaneudes-dev.github.io/Music_web",
    techStack: ["React", "Django REST Framework"],
    links: {
      live: "https://jeaneudes-dev.github.io/Music_web/",
      github: "https://github.com/JeanEudes-dev/music-web",
    },
  },
  {
    title: "New and Complete Version of Dynamiqtec",
    description:
      "A fully automated news-fetching system that updates dynamically.",
    techStack: ["Django", "Python", "React", "JavaScript"],
    links: {
      live: "https://dynamiqtec.com",
      github: "https://github.com/JeanEudes-dev/future",
    },
  },
  {
    title: "Student Support System",
    description:
      "Built a web platform that helps students set up plans to clear outstanding balances and keep attending lectures.",
    techStack: ["React", "TypeScript", "Django", "Python"],
    links: {
      github: "https://github.com/JeanEudes-dev/student-support-system",
    },
  },
  {
    title: "RDU Clubs Portal",
    description:
      "A platform for managing and coordinating all RDU clubs and their activities. Primarily built the frontend using React.",
    techStack: ["React", "TypeScript"],
    links: {
      github: "https://github.com/JeanEudes-dev/rdu-clubs-portal",
    },
  },
  {
    title: "Dino Game 🦖",
    description:
      "A fun and interactive game where users control a dinosaur to jump over obstacles. Built with React and styled-components, offering a smooth, responsive experience on all devices.",
    techStack: ["React", "Responsive Web Design"],
    links: {
      github: "https://github.com/JeanEudes-dev/dino-game",
    },
  },
];
