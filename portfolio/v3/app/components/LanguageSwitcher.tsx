"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.split("-")[0] || "en";

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={currentLang === "en" ? "Passer en français" : "Switch to English"}
      className="px-2 py-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
    >
      {currentLang === "en" ? "FR" : "EN"}
    </button>
  );
}
