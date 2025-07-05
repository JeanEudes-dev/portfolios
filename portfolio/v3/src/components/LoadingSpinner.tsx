
import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  const dotVariants = {
    animate: {
      y: ["0%", "-100%", "0%"],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg">
      <motion.div
        className="relative w-20 h-20 border-4 border-t-4 border-accent-blue rounded-full"
        variants={spinnerVariants}
        animate="animate"
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -mt-2 -ml-2 w-4 h-4 bg-accent-green rounded-full"
          variants={dotVariants}
          animate="animate"
        />
      </motion.div>
      <p className="mt-4 text-text-light text-lg">Loading Quantum Data...</p>
    </div>
  );
};

export default LoadingSpinner;
