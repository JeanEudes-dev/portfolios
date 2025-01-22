import Sidebar from "./components/Sidebar";
import "./globals.css";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Jean-Eudes Assogba - Full-Stack Software Engineer portfolio website showcasing skills, experiences, and projects." />
        <meta name="author" content="Jean-Eudes Assogba" />
        <meta name="keywords" content="Full-Stack Developer, Software Engineer, Jean-Eudes Assogba, React, Python, Portfolio, Web Development" />
        <meta name="robots" content="index, follow" />
        <title>Jean-Eudes Assogba | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Jean-Eudes Assogba | Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Jean-Eudes Assogba, a passionate Full-Stack Software Engineer." />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:url" content="https://jeaneudes-dev.github.io/portfolios" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jean-Eudes Assogba | Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Jean-Eudes Assogba, a passionate Full-Stack Software Engineer." />
        <meta name="twitter:image" content="/me.jpg" />
      </Head>
      <body className="bg-[#0a192f] text-[#ccd6f6]">
        <div className="lg:flex">
          <Sidebar />
          <main className="lg:ml-auto w-full lg:w-[52%] lg:p-8 flex flex-col h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
