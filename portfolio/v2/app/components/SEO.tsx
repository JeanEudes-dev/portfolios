"use client";

import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical,
  noindex = false 
}) => {
  const { t, i18n } = useTranslation();

  const siteUrl = 'https://jeaneudes-dev.github.io/portfolios';
  const currentLang = i18n.language || 'en';
  
  // Build URLs with language parameter
  const currentUrl = `${siteUrl}${currentLang === 'fr' ? '?lang=fr' : ''}`;
  
  // Use for hreflang tags
  const englishUrl = siteUrl;
  const frenchUrl = `${siteUrl}?lang=fr`;

  const seoTitle = title 
    ? t('meta.titleTemplate').replace('%s', title)
    : t('meta.title');
    
  const seoDescription = description || t('meta.description');

  // Structured Data for Person
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": t('name'),
    "jobTitle": t('seo.structuredData.jobTitle'),
    "description": t('seo.structuredData.description'),
    "url": siteUrl,
    "image": `${siteUrl}/me.jpg`,
    "sameAs": [
      "https://github.com/JeanEudes-dev",
      "https://www.linkedin.com/in/jean-eudes-dev",
      "https://x.com/eudes_asg",
      "https://instagram.com/eudes_lsl"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": t('seo.structuredData.worksFor')
    },
    "alumniOf": {
      "@type": "EducationalOrganization", 
      "name": t('seo.structuredData.alumniOf')
    },
    "knowsAbout": t('seo.structuredData.knowsAbout', { returnObjects: true }),
    "hasOccupation": {
      "@type": "Occupation",
      "name": t('seo.structuredData.jobTitle'),
      "occupationLocation": {
        "@type": "Place",
        "name": t('seo.structuredData.location')
      },
      "skills": t('seo.structuredData.skills')
    }
  };

  // Website Structured Data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t('meta.siteName'),
    "alternateName": t('meta.applicationName'),
    "url": siteUrl,
    "description": seoDescription,
    "inLanguage": currentLang,
    "author": {
      "@type": "Person",
      "name": t('name')
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={t('meta.keywords')} />
      <meta name="author" content={t('meta.author')} />
      <meta name="generator" content={t('meta.generator')} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : t('meta.robots')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={englishUrl} />
      <link rel="alternate" hrefLang="fr" href={frenchUrl} />
      <link rel="alternate" hrefLang="x-default" href={englishUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={t('meta.ogType')} />
      <meta property="og:title" content={t('meta.ogTitle')} />
      <meta property="og:description" content={t('meta.ogDescription')} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={t('meta.siteName')} />
      <meta property="og:locale" content={t('meta.ogLocale')} />
      <meta property="og:locale:alternate" content={currentLang === 'en' ? 'fr_FR' : 'en_US'} />
      <meta property="og:image" content={`${siteUrl}/me.jpg`} />
      <meta property="og:image:alt" content={`${t('name')} - ${t('role')}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={t('meta.twitterCard')} />
      <meta name="twitter:title" content={t('meta.twitterTitle')} />
      <meta name="twitter:description" content={t('meta.twitterDescription')} />
      <meta name="twitter:image" content={`${siteUrl}/me.jpg`} />
      <meta name="twitter:image:alt" content={`${t('name')} - ${t('role')}`} />
      <meta name="twitter:site" content="@eudes_asg" />
      <meta name="twitter:creator" content="@eudes_asg" />
      
      {/* App Specific */}
      <meta name="application-name" content={t('meta.applicationName')} />
      <meta name="apple-mobile-web-app-title" content={t('meta.applicationName')} />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
    </>
  );
};

export default SEO;