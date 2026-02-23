"use client";

import { useTranslation } from "react-i18next";

export default function SEO() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.split("-")[0] || "en";
  const baseUrl = "https://jeaneudes-dev.github.io/portfolios";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jean-Eudes Assogba",
    jobTitle: t("seo.jobTitle"),
    url: baseUrl,
    email: "mailto:eudesmails@gmail.com",
    sameAs: [
      "https://github.com/JeanEudes-dev",
      "https://www.linkedin.com/in/jean-eudes-assogba/",
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
      <meta name="description" content={t("meta.description")} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t("meta.ogTitle")} />
      <meta property="og:description" content={t("meta.ogDescription")} />
      <meta property="og:image" content={`${baseUrl}/me.jpg`} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />
      <meta name="twitter:card" content={t("meta.twitterCard")} />
      <meta name="twitter:title" content={t("meta.ogTitle")} />
      <meta name="twitter:description" content={t("meta.ogDescription")} />
      <meta name="twitter:image" content={`${baseUrl}/me.jpg`} />
      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="fr" href={baseUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
