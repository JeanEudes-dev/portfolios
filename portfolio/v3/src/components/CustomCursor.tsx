
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#00F0FF", // accent-blue
      mixBlendMode: "difference",
      scale: 1,
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "#00F0FF",
      mixBlendMode: "difference",
      scale: 1.2,
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "#00FF80", // accent-green
      mixBlendMode: "difference",
      scale: 1.5,
    },
  };

  const handleMouseEnter = (variant: string) => () => setCursorVariant(variant);
  const handleMouseLeave = () => setCursorVariant('default');

  // Expose functions globally for elements outside React tree (e.g., pure HTML links)
  useEffect(() => {
    const links = document.querySelectorAll('a, button, input, textarea');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter('link'));
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    const textElements = document.querySelectorAll('h1, h2, h3, p, span');
    textElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter('text'));
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter('link'));
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
      textElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter('text'));
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
};

export default CustomCursor;
