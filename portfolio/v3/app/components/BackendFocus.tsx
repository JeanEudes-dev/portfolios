"use client";

import { useTranslation } from "react-i18next";

export default function BackendFocus() {
  const { t } = useTranslation();
  const items = t("backendFocus", { returnObjects: true }) as Array<{
    label: string;
    description: string;
  }>;

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-8">
          {t("sections.backendFocus")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-border hover:bg-surface transition-colors"
            >
              <h4 className="text-sm font-medium text-text-primary">
                {item.label}
              </h4>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
