"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${t("footer.email")}`}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            {t("footer.email")}
          </a>
          <a
            href="https://github.com/JeanEudes-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jean-eudes-assogba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-6 space-y-1 text-sm text-text-tertiary">
          <p>{t("footer.languages")}</p>
          <p>{t("footer.availabilityText")}</p>
          <p>
            <a
              href="https://jeaneudes-dev.github.io/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-secondary transition-colors underline underline-offset-4"
            >
              {t("footer.blog")}
            </a>
          </p>
        </div>
        <p className="mt-8 text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
