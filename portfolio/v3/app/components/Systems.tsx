"use client";

import { useTranslation } from "react-i18next";

export default function Systems() {
  const { t } = useTranslation();
  const systems = t("systems", { returnObjects: true }) as Array<{
    name: string;
    url: string;
    description: string;
    metrics: string[];
    stack: string[];
  }>;

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-8">
          {t("sections.systems")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {systems.map((system, i) => (
            <a
              key={i}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-lg border border-border hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-text-primary">
                  {system.name}
                </h4>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-text-tertiary group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {system.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {system.metrics.map((metric, j) => (
                  <span key={j} className="text-sm font-semibold text-text-primary">
                    {metric}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {system.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 text-xs border border-border rounded-full text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
