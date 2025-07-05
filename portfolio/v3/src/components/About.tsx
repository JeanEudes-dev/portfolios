
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCode, FaUsers } from 'react-icons/fa';

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-lg text-gray-light leading-relaxed" variants={itemVariants}>
            <p className="mb-4">
              I'm a passionate Full-Stack Software Engineer with a love for building beautiful, functional, and scalable web applications. My journey in tech has been driven by a desire to solve complex problems and create meaningful experiences for users.
            </p>
            <p className="mb-4">
              With a strong foundation in both frontend and backend development, I specialize in creating seamless, end-to-end solutions. I'm proficient in a variety of technologies, including React, Django, and cloud platforms like AWS and GCP.
            </p>
            <p>
              I'm a firm believer in clean code, user-centric design, and the power of collaboration. I'm always eager to learn new things and take on new challenges.
            </p>
          </motion.div>
          <div className="flex flex-col gap-8">
            <motion.div className="flex items-center gap-4 p-6 bg-gray-dark rounded-lg shadow-lg" variants={itemVariants}>
              <FaAward className="text-white text-3xl" />
              <div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
                <p className="text-gray-light">3+ Years of professional experience</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-4 p-6 bg-gray-dark rounded-lg shadow-lg" variants={itemVariants}>
              <FaCode className="text-white text-3xl" />
              <div>
                <h3 className="text-xl font-bold text-white">Specialization</h3>
                <p className="text-gray-light">Full-Stack Development, AI Integration</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-4 p-6 bg-gray-dark rounded-lg shadow-lg" variants={itemVariants}>
              <FaUsers className="text-white text-3xl" />
              <div>
                <h3 className="text-xl font-bold text-white">Clients</h3>
                <p className="text-gray-light">20+ happy clients and users</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
