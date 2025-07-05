
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiDjango, SiPython, SiTypescript, SiTailwindcss,
  SiPostgresql, SiAmazonaws, SiGooglecloud, SiFramer, SiVite
} from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, name }) => (
  <div className="flex flex-col items-center p-4 bg-dark-surface rounded-lg shadow-lg transition-transform transform hover:scale-105 group animate-node-pulse">
    <div className="text-4xl text-accent-blue group-hover:text-accent-green transition-colors duration-300">
      {icon}
    </div>
    <p className="mt-2 text-sm font-medium text-text-light group-hover:text-accent-green transition-colors duration-300">
      {name}
    </p>
  </div>
);

const TechStack: React.FC = () => {
  const technologies = [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiAmazonaws />, name: 'AWS' },
    { icon: <SiGooglecloud />, name: 'GCP' },
    { icon: <FaBrain />, name: 'AI/ML' }, // Using FaBrain for LangChain/GPT-4
    { icon: <SiFramer />, name: 'Framer Motion' },
    { icon: <SiVite />, name: 'Vite' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-accent-blue mb-12 animate-fade-in-up">My Tech Stack</h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TechIcon icon={tech.icon} name={tech.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
