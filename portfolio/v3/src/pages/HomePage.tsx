
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../layouts/Layout';
import Typewriter from '../components/Typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/JeanEudes-dev' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/jean-eudes-assogba/' },
    { icon: <FaEnvelope />, url: 'mailto:eudesmails@gmail.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-text-light tracking-tighter mb-4"
            variants={itemVariants}
          >
            Jean-Eudes ASSOGBA
          </motion.h1>
          <motion.div
            className="text-2xl md:text-4xl font-light text-accent-blue h-20 md:h-24"
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
            className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-text-light"
            variants={itemVariants}
          >
            I design and build modern web applications that are fast, secure, and beautiful — from idea to deployment.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a href="#projects" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-dark-bg bg-accent-blue hover:bg-accent-blue/80 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105 shadow-lg animate-pulse-glow">
              View My Work
            </a>
            <a href="/src/assets/Jean-Eudes_ASSOGBA_dev.pdf" download className="px-8 py-3 border border-accent-blue text-base font-medium rounded-md text-accent-blue bg-transparent hover:bg-accent-blue hover:text-dark-bg md:py-4 md:text-lg md:px-10 transition-all shadow-lg">
              Download CV
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent-blue transition-colors duration-300 text-2xl">
                  {link.icon}
                </a>
              ))}
            </div>
            <a href="#projects" className="mt-6 text-accent-blue animate-bounce">
              <FiArrowDown size={24} />
            </a>
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
