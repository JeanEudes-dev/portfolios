"use client";
import Sidebar from "./components/Sidebar";
import ScrollProgress from "./components/ScrollProgress";
import SEO from "./components/SEO";
import PerformanceOptimizations from "./components/PerformanceOptimizations";
import "./globals.css";
import { useRef, useEffect } from "react";
import "../lib/i18n";
import { useTranslation } from "react-i18next";
import { useLanguageDetection } from "../hooks/useLanguageDetection";

export default function Layout({ children }: { children: React.ReactNode }) {
  const lightEffectRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const { isInitialized } = useLanguageDetection();

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const lightEffect = lightEffectRef.current;
      if (lightEffect) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const lightSize = 400;

        lightEffect.style.left = `${mouseX - lightSize / 2}px`;
        lightEffect.style.top = `${mouseY - lightSize / 2}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Show loading state while language detection is initializing
  if (!isInitialized) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Loading...</title>
        </head>
        <body className="dot-bg">
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-400"></div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang={i18n.language}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/portfolios/favicon.ico" />
        
        {/* SEO Component handles all meta tags, structured data, etc. */}
        <SEO />
        
        {/* Performance optimizations */}
        <PerformanceOptimizations />
      </head>
      <body className=" dot-bg">
        <ScrollProgress />
        <div className="lg:flex ">
          <Sidebar />
          <main className="lg:ml-auto w-full lg:w-[52%] lg:p-8 flex flex-col h-screen">
            {children}
          </main>
        </div>
        <div
          ref={lightEffectRef}
          className="light-effect hidden lg:block"
        ></div>
      </body>
    </html>
  );
}
