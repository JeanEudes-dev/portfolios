"use client";

import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achievements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects/Projects";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";

export default function Home() {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <AboutMe />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillsSection />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Projects />
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Achievements />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ContactForm />
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
