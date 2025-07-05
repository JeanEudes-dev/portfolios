/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [openProjectUrl, setOpenProjectUrl] = useState<string | null>(null);
  const projects = [
    {
      title: "RenoSmarter.ai – Voiceflow Cost Estimator",
      description:
        "AI-driven home renovation cost estimation app built with Voiceflow, Airtable, and Python. Enhanced pricing logic from 60% to 81% accuracy and boosted completion rates by 40%.",
      link: "https://renosmarter.ai",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689370/Screenshot_From_2025-07-05_07-22-31_dmthi7.png",
      alt: "RenoSmarter.ai project card",
    },
    {
      title: "BrollyHub – AI Expert Marketplace",
      description:
        "GPT-powered platform for expert booking, smart offers, file shelves, calendar sync, and real-time chat/video calls. Serves 500+ users with seamless AI integration.",
      link: "https://brollyhub.com",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689485/Screenshot_From_2025-07-05_07-24-26_loil11.png",
      alt: "BrollyHub project card",
    },
    {
      title: "Aveem University System",
      description:
        "Full ERP for academic operations across finance, grading, and notifications for 2,000+ users. Built with React, Django, and PostgreSQL, deployed on AWS EC2.",
      link: "https://sys.aveemuni.com",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689577/Screenshot_From_2025-07-05_07-26-04_m2hftq.png",
      alt: "Aveem University System project card",
    },
    {
      title: "Dynamiqtec – AI-Powered Blog",
      description:
        "Minimalist, multilingual personal blog and portfolio site with blazing-fast MDX content and Gemma-based translation via API.",
      link: "https://dynamiqtec.com",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689665/Screenshot_From_2025-07-05_07-27-25_ldliiq.png",
      alt: "Dynamiqtec project card",
    },
    {
      title: "Spotter – Trip Planner App",
      description:
        "AI-assisted travel planner that helps users create, organize, and visualize trips interactively. Built with React and deployed on Vercel.",
      link: "https://spotter-trip-planner.vercel.app/",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689755/Screenshot_From_2025-07-05_07-29-01_tsazet.png",
      alt: "Spotter project card",
    },
    {
      title: "Bookify – AI Book Recommendation App",
      description:
        "Book discovery and recommendation web app with real-time search across 10,000+ titles. Built using Django and React.",
      link: "https://jeaneudes-dev.github.io/Bookify/",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689815/Screenshot_From_2025-07-05_07-30-01_vxmt2x.png",
      alt: "Bookify project card",
    },
    {
      title: "Sentifeel – AI Sentiment Classifier",
      description:
        "GPT-4-powered web classifier achieving 90% accuracy on 5K+ text entries. Built with React for a sleek and fast UI.",
      link: "https://jeaneudes-dev.github.io/sentifeel/",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689866/Screenshot_From_2025-07-05_07-30-54_j5i9le.png",
      alt: "Sentifeel project card",
    },
    {
      title: "Readme Converter – Markdown to PDF",
      description:
        "Developer-focused SPA for converting markdown to PDF/HTML with live preview and export capabilities.",
      link: "https://jeaneudes-dev.github.io/readme-converter/",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751689934/Screenshot_From_2025-07-05_07-32-01_sn7i9l.png",
      alt: "Readme Converter project card",
    },
    {
      title: "Personalized AI Chat Assistant",
      description:
        "Conversational AI assistant built with React and OpenAI APIs. Supports context awareness and multi-turn interactions.",
      link: "https://github.com/JeanEudes-dev/Personalised-chat-assistant",
      imageUrl: "/portfolios/chat.png",
      alt: "Personalized AI Chat Assistant project card",
    },
    {
      title: "Journal PWA – Offline Notes App",
      description:
        "Progressive Web App for journaling and note-taking, supporting offline sync, secure storage, and a clean mobile interface.",
      link: "https://jeaneudes-dev.github.io/journal-pwa/",
      imageUrl:
        "https://res.cloudinary.com/drhwxs4za/image/upload/v1751690014/Screenshot_From_2025-07-05_07-33-22_rkim7b.png",
      alt: "Journal PWA project card",
    },
  ];

  return (
    <>
      <ul className="group/list">
        {projects.map((project, index) => (
          <li key={index} className="mb-12">
            <div
              onClick={() => setOpenProjectUrl(project.link)}
              className="cursor-pointer group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition bg-white/10 backdrop-blur-md pointer-events-none" />
              <div className="z-10 sm:order-2 sm:col-span-6 m-4">
                <h3 className="font-medium leading-tight text-slate-200">
                  {project.title}
                  <span className="ml-2 text-xs text-teal-300">Preview</span>
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {project.description}
                </p>
              </div>
              <img
                alt={project.alt}
                loading="lazy"
                width="200"
                height="48"
                className="aspect-video m-4 z-10 object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2"
                src={project.imageUrl}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/JeanEudes-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded bg-white/10 backdrop-blur-lg text-white font-semibold hover:bg-white/20 transition"
        >
          View More
        </a>
      </div>

      {openProjectUrl && (
        <ProjectModal
          url={openProjectUrl}
          onClose={() => setOpenProjectUrl(null)}
        />
      )}
    </>
  );
};

export default Projects;
