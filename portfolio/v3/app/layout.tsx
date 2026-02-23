import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://jeaneudes-dev.github.io/portfolios";

export const metadata: Metadata = {
  title: "Jean-Eudes Assogba — Backend Engineer",
  description:
    "Backend engineer with 4+ years building production Django systems. Sole backend owner on multiple products serving thousands of users. Python, Django, PostgreSQL, Redis, Celery, REST APIs, WebSockets.",
  authors: [{ name: "Jean-Eudes Assogba" }],
  keywords: [
    "Backend Engineer",
    "Python",
    "Django",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "WebSockets",
    "Celery",
    "Docker",
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Jean-Eudes Assogba — Backend Engineer",
    description:
      "Backend engineer building production Django systems. PostgreSQL, Redis, Celery, REST APIs, WebSockets.",
    url: baseUrl,
    images: ["/me.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Eudes Assogba — Backend Engineer",
    description:
      "Backend engineer building production Django systems. PostgreSQL, Redis, Celery, REST APIs, WebSockets.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme:light)').matches)){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bg-primary focus:text-text-primary focus:border focus:border-border focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
