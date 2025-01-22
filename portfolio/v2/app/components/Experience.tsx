import React from "react";

const Experience = () => {
    const experiences = [
        {
            period: "2023 — Present",
            title: "Freelance Web Developer",
            company: "Self",
            link: "https://github.com/jeaneudes-dev",
            description:
                "Collaborated with clients to design and build responsive and user-friendly websites. Focused on optimizing performance, accessibility, and usability while meeting unique business needs.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "UI/UX Design",
                "Python",
                "Django"
            ],
        },
        {
            period: "2023 — Present",
            title: "Software Engineering Student",
            company: "RDU",
            link: "https://rdu.edu.tr",
            description:
                "Pursuing a degree in Software Engineering with a focus on web development, backend services, and artificial intelligence, graduating by February 2026.",
            technologies: [
                "Python",
                "C++",
                "C#",
                "Software Development",
                "Data Structures",
                "Algorithms",
                "Object-Oriented Programming",
                "Web Development",
                "Backend Services",
                "Artificial Intelligence",
            ],
        },
        {
            period: "2024",
            title: "Certified Full Stack Developer",
            company: "IBM",
            link: "https://coursera.org",
            description:
                "Completed IBM's Full Stack Software Developer certification program, gaining hands-on experience with Python, Django, Flask, React, and cloud deployment.",
            technologies: [
                "Python",
                "Django",
                "Flask",
                "React",
                "Next.js",
                "Cloud Deployment",
                "DevOPS",
            ],
        },
        {
            period: "2022 — Present",
            title: "Personal Projects",
            company: "GitHub Portfolio",
            link: "https://github.com/jeaneudes-dev",
            description:
                "Developed various projects, including interactive websites, AI tools, and portfolio designs, showcasing expertise in frontend and backend development.",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        },
    ];

    return (
        <ol className="group/list space-y-12">
            {experiences.map((experience, index) => (
                <li key={index} className="relative group">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                        <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label={experience.period}
                        >
                            {experience.period}
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a
                                        href={experience.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base group/link"
                                        aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                                    >
                                        <span>{experience.title} · &nbsp;&nbsp;&nbsp;</span>
                                        <span className="inline-block">
                                            {experience.company}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate-400">
                                {experience.description}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                {experience.technologies.map((tech, idx) => (
                                    <li key={idx} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                            {tech}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Experience;
