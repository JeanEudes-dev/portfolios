import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience.experiences', { returnObjects: true }) as Array<{
    period: string;
    title: string;
    company: string;
    description: string;
    ariaLabel: string;
  }>;
  
  const experienceData = [
    {
      period: experiences[0]?.period || "2024 — Present",
      title: experiences[0]?.title || "AI Engineering Intern",
      company: experiences[0]?.company || "PM-Accelerator",
      link: "#",
      description: experiences[0]?.description || "",
      ariaLabel: experiences[0]?.ariaLabel || "",
      technologies: [
        "Voiceflow",
        "AI Prompting",
        "Python",
        "Airtable",
        "UX Flows",
        "Automation",
      ],
    },
    {
      period: experiences[1]?.period || "2023 — 2024",
      title: experiences[1]?.title || "Frontend Developer",
      company: experiences[1]?.company || "RDU, TRNC",
      link: "https://rdu.edu.tr",
      description: experiences[1]?.description || "",
      ariaLabel: experiences[1]?.ariaLabel || "",
      technologies: [
        "React",
        "Tailwind CSS",
        "Django",
        "Event Scheduling",
        "UX Design",
      ],
    },
    {
      period: experiences[2]?.period || "2023",
      title: experiences[2]?.title || "Full-Stack Developer",
      company: experiences[2]?.company || "RDU, TRNC",
      link: "https://rdu.edu.tr",
      description: experiences[2]?.description || "",
      ariaLabel: experiences[2]?.ariaLabel || "",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Performance Optimization",
      ],
    },
    {
      period: experiences[3]?.period || "2023 — Present",
      title: experiences[3]?.title || "Freelance Full-Stack Developer",
      company: experiences[3]?.company || "Independent",
      link: "https://github.com/JeanEudes-dev",
      description: experiences[3]?.description || "",
      ariaLabel: experiences[3]?.ariaLabel || "",
      technologies: [
        "Next.js",
        "React",
        "Django",
        "Tailwind",
        "PostgreSQL",
        "SEO",
        "UX/UI",
      ],
    },
    {
      period: experiences[4]?.period || "2022 — Present",
      title: experiences[4]?.title || "Teaching Assistant",
      company: experiences[4]?.company || "RDU, TRNC",
      link: "https://rdu.edu.tr",
      description: experiences[4]?.description || "",
      ariaLabel: experiences[4]?.ariaLabel || "",
      technologies: [
        "C++",
        "Data Structures",
        "Object-Oriented Design",
        "Mentorship",
      ],
    },
    {
      period: experiences[5]?.period || "2024",
      title: experiences[5]?.title || "IBM Certified Full Stack Developer",
      company: experiences[5]?.company || "Coursera",
      link: "https://coursera.org",
      description: experiences[5]?.description || "",
      ariaLabel: experiences[5]?.ariaLabel || "",
      technologies: [
        "React",
        "Python",
        "Django",
        "Flask",
        "Docker",
        "CI/CD",
        "Cloud",
      ],
    },
  ];

  return (
    <ol className="group/list space-y-12">
      {experienceData.map((experience, index) => (
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
                    aria-label={experience.ariaLabel}
                  >
                    <span>{experience.title} · &nbsp;&nbsp;&nbsp;</span>
                    <span className="inline-block">
                      {experience.company}
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
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                {experience.description}
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label={t('skills.technologiesUsed')}
              >
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
