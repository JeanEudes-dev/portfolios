"use client";

import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience", { returnObjects: true }) as Array<{
    title: string;
    company: string;
    url: string;
    period: string;
    location: string;
    bullets: string[];
  }>;

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-8">
          {t("sections.experience")}
        </h3>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h4 className="text-base font-medium text-text-primary">
                  {exp.title}{" "}
                  <span className="text-text-tertiary font-normal">|</span>{" "}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {exp.company}
                  </a>
                </h4>
                <span className="text-sm text-text-tertiary whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-tertiary">{exp.location}</p>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-border"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
