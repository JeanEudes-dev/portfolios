import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Personalized AI Chat Assistant ",
      description:
        "Developed a professional and user-friendly AI-powered chat assistant using modern technologies and best practices, enabling seamless interactions and intelligent responses.",
      link: "https://github.com/JeanEudes-dev/Personalised-chat-assistant",
      imageUrl: "/portfolios/chat.png",
      alt: "Personalized AI Chat Assistant project card",
    },
    {
      title: "Music Web: A Spotify Streaming Experience ",
      description:
        "Crafted an interactive music web application that leveraged the Spotify API, achieving over 500 song searches per day on average.",
      link: "https://github.com/JeanEudes-dev/Music_web",
      imageUrl: "/portfolios/music-web.png",
      alt: "Music Web project card",
    },
    {
      title: "Bookify: A Book Reading Web ",
      description:
        "An online platform providing users access to a vast library of books and personalized recommendations, with seamless reading and searching among 10,000+ books.",
      link: "https://jeaneudes-dev.github.io/Bookify/",
      imageUrl: "/portfolios/bookify.png",
      alt: "Bookify project card",
    },
    {
      title: "Dynamiqtec ",
      description:
        "A fully automated news-fetching system that dynamically updates, ensuring users stay informed with the latest news.",
      link: "https://dynamiqtec.com",
      imageUrl: "/_next/image?url=%2Fimages%2Fprojects%2Fdynamiqtec.png&w=640&q=75",
      alt: "Dynamiqtec project card",
    },
  ];


  return (
    <ul className="group/list">
      {projects.map((project, index) => (
        <li key={index} className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} (opens in a new tab)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {project.title}
                    <span className="inline-block">App</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">{project.description}</p>
            </div>

            <img
              alt={project.alt}
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{ color: 'transparent' }}
              src={project.imageUrl}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
