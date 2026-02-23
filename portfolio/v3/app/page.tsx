"use client";

import "@/lib/i18n";
import { useLanguageDetection } from "@/hooks/useLanguageDetection";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SEO from "./components/SEO";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BackendFocus from "./components/BackendFocus";
import Systems from "./components/Systems";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  const { isInitialized } = useLanguageDetection();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = i18n.language?.split("-")[0] || "en";
    }
  }, [isInitialized, i18n.language]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-text-tertiary border-t-text-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEO />
      <Nav />
      <main>
        <Hero />
        <BackendFocus />
        <Systems />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
