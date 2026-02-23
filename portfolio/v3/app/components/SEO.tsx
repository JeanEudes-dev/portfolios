"use client";

import { useTranslation } from "react-i18next";

export default function SEO() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.split("-")[0] || "en";
  const baseUrl = "https://jeaneudes-dev.github.io/portfolios";

  const profilePageData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00+00:00",
    dateModified: "2026-02-23T00:00:00+00:00",
    mainEntity: {
      "@type": "Person",
      name: "Jean-Eudes Assogba",
      jobTitle: t("seo.jobTitle"),
      url: baseUrl,
      email: "mailto:eudesmails@gmail.com",
      image: `${baseUrl}/me.jpg`,
      description: t("meta.description"),
      sameAs: [
        "https://github.com/JeanEudes-dev",
        "https://www.linkedin.com/in/jean-eudes-assogba/",
        "https://jeaneudes-dev.github.io/blog",
      ],
      knowsAbout: [
        "Django",
        "Python",
        "PostgreSQL",
        "Redis",
        "Celery",
        "REST APIs",
        "WebSockets",
        "Backend Engineering",
        "Docker",
        "CI/CD",
        "AI Integration",
      ],
      knowsLanguage: ["en", "fr"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Rauf Denktas University",
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: t("seo.location"),
      },
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("meta.title"),
    url: baseUrl,
    inLanguage: lang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
