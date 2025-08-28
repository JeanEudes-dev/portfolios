"use client";

import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import Me from "./components/me";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ["about", "experience", "projects", "me"];
  //     const scrollPos = window.scrollY + window.innerHeight / 2;

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const { offsetTop, offsetHeight } = element;
  //         if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
  //           window.history.replaceState(null, "", `#${section}`);
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const sections = [
    { id: "about", Component: About, title: t('sections.about') },
    { id: "experience", Component: Experience, title: t('sections.experience') },
    { id: "skills", Component: Skills, title: t('sections.skills') },
    { id: "projects", Component: Projects, title: t('sections.projects') },
    { id: "me", Component: Me, title: t('sections.me') },
  ];

  return (
    <>
      {sections.map(({ id, Component, title }, index) => (
        <motion.section
          key={id}
          id={id}
          className="relative py-16 px-8 lg:px-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
        >
          <div
            className={`sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0`}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              {title}
            </h2>
          </div>
          <Component />
        </motion.section>
      ))}
    </>
  );
};

export default Main;
