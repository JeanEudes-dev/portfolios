"use client";

import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold text-text-primary hover:opacity-80 transition-opacity"
        >
          Jean-Eudes Assogba
        </a>
        <div className="flex items-center gap-1">
          <a
            href="https://jeaneudes-dev.github.io/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            {t("nav.blog")}
          </a>
          <a
            href="/portfolios/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            {t("nav.resume")}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
