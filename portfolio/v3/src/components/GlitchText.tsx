
import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ children, className }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="glitch"
      variants={{
        glitch: {
          x: [0, -2, 2, -2, 2, 0],
          y: [0, -2, 2, -2, 2, 0],
          transition: { duration: 0.4, repeat: Infinity, repeatType: "mirror" },
        },
      }}
    >
      {children}
      <span className="absolute top-0 left-0 w-full h-full text-accent-blue opacity-0 group-hover:opacity-100" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)' }}>{children}</span>
      <span className="absolute top-0 left-0 w-full h-full text-accent-green opacity-0 group-hover:opacity-100" style={{ clipPath: 'polygon(0 66%, 100% 66%, 100% 100%, 0 100%)' }}>{children}</span>
    </motion.span>
  );
};

export default GlitchText;
