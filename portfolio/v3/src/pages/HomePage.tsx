import React from 'react';
import Layout from '../layouts/Layout';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import TechStack from '../components/TechStack';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="home" className="py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mt-6 text-lg md:text-xl text-gray-light">
            I design and build modern web applications that are fast, secure, and beautiful — from idea to deployment.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black md:py-4 md:text-lg md:px-10 transition-all">
              View My Work
            </a>
            <a href="/src/assets/Jean-Eudes_ASSOGBA_dev.pdf" download className="px-8 py-3 border border-gray-medium text-base font-medium rounded-md text-gray-light bg-transparent hover:bg-gray-medium hover:text-white md:py-4 md:text-lg md:px-10 transition-all">
              Download CV
            </a>
          </div>
        </div>
      </section>
      <Projects />
      <About />
      <TechStack />
      <Contact />
    </Layout>
  );
};

export default HomePage;
