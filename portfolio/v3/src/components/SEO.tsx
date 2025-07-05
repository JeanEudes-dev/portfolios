
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Jean-Eudes ASSOGBA's personal portfolio website. Full-Stack Software Engineer specializing in React, Django, Cloud, and AI Integration.",
  name = "Jean-Eudes ASSOGBA",
  type = "website",
  url = "https://jeaneudes-dev.github.io/portfolio/", // Placeholder URL
  image = "https://jeaneudes-dev.github.io/portfolio/og-image.jpg", // Placeholder OG image
}) => {
  return (
    <Helmet>
      <title>{title} | Jean-Eudes ASSOGBA</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
