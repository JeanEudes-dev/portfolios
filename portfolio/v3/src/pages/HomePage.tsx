import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
import Typewriter from '../components/Typewriter';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <SEO title="Home" />
      <section id="home" className="py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4"
            variants={itemVariants}
          >
            Jean-Eudes ASSOGBA
          </motion.h1>
          <motion.div
            className="text-2xl md:text-4xl font-light text-gray-light h-20 md:h-24"
            variants={itemVariants}
          >
            <Typewriter 
              text={[
                'Full-Stack Software Engineer',
                'React & Django Expert',
                'Cloud & AI Integration Specialist',
              ]}
              loop={true}
            />
          </motion.div>
          <motion.p
            className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-light"
            variants={itemVariants}
          >
            I design and build modern web applications that are fast, secure, and beautiful — from idea to deployment.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a href="#projects" className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black md:py-4 md:text-lg md:px-10 transition-all">
              View My Work
            </a>
            <a href="/src/assets/Jean-Eudes_ASSOGBA_dev.pdf" download className="px-8 py-3 border border-gray-medium text-base font-medium rounded-md text-gray-light bg-transparent hover:bg-gray-medium hover:text-white md:py-4 md:text-lg md:px-10 transition-all">
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </section>
      <Projects />
      <About />
      <TechStack />
      <Contact />
    </Layout>
  );
};

export default HomePage;