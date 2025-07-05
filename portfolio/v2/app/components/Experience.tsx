import React from "react";

const Experience = () => {
  const experiences = [
    {
      period: "2024 — Present",
      title: "AI Engineering Intern",
      company: "PM-Accelerator",
      link: "#", // Add actual link if available
      description:
        "Refactored Voiceflow-based cost estimation logic, boosting pricing accuracy from 60% to 81%. Improved user completion rates by 40% and collaborated cross-functionally under fast-paced agile cycles.",
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
      period: "2023 — 2024",
      title: "Frontend Developer",
      company: "RDU, TRNC",
      link: "https://rdu.edu.tr",
      description:
        "Built a Club Management System adopted by 10+ clubs and 2,000+ students. Integrated automated event scheduling and real-time announcements, increasing student engagement by 50%.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Django",
        "Event Scheduling",
        "UX Design",
      ],
    },
    {
      period: "2023",
      title: "Full-Stack Developer",
      company: "RDU, TRNC",
      link: "https://rdu.edu.tr",
      description:
        "Led development of a financial dashboard reducing transaction processing time by 55%. Enhanced support systems, cutting helpdesk wait times by 75%.",
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Performance Optimization",
      ],
    },
    {
      period: "2023 — Present",
      title: "Freelance Full-Stack Developer",
      company: "Independent",
      link: "https://github.com/JeanEudes-dev",
      description:
        "Delivered 20+ websites and web apps across e-commerce, portfolios, and SaaS. Migrated legacy stacks, built custom CMS tools, and increased client sales through SEO-optimized UX.",
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
      period: "2022 — Present",
      title: "Teaching Assistant",
      company: "RDU, TRNC",
      link: "https://rdu.edu.tr",
      description:
        "Tutored 500+ students in C++ and software fundamentals. Boosted class performance from 65% to 94% via live code reviews and guided practice.",
      technologies: [
        "C++",
        "Data Structures",
        "Object-Oriented Design",
        "Mentorship",
      ],
    },
    {
      period: "2024",
      title: "IBM Certified Full Stack Developer",
      company: "Coursera",
      link: "https://coursera.org",
      description:
        "Completed 100+ hours of real-world projects using React, Django, Flask, and Docker. Gained full-stack cloud deployment expertise across multiple stacks.",
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
                aria-label="Technologies used"
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
