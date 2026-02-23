import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jean-Eudes Assogba — Backend Engineer",
  description:
    "Backend engineer with 4+ years building production Django systems. Sole backend owner on multiple products serving thousands of users.",
  metadataBase: new URL("https://jeaneudes-dev.github.io/portfolios"),
  openGraph: {
    title: "Jean-Eudes Assogba — Backend Engineer",
    description:
      "Backend engineer building production Django systems. PostgreSQL, Redis, Celery, REST APIs, WebSockets.",
    images: ["/me.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Eudes Assogba — Backend Engineer",
    description:
      "Backend engineer building production Django systems. PostgreSQL, Redis, Celery, REST APIs, WebSockets.",
    images: ["/me.jpg"],
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
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
