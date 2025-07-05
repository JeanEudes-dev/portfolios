"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed container for the progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 backdrop-blur-sm z-50">
        {/* Animated progress bar */}
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 shadow-lg"
          style={{
            width: `${scrollProgress}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 blur-sm opacity-50"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform -translate-x-full"></div>
        </motion.div>
      </div>
      
      {/* Optional: Subtle indicator dot at the end */}
      {scrollProgress > 0 && (
        <motion.div
          className="fixed top-0 z-50 w-2 h-2 bg-white rounded-full shadow-lg"
          style={{
            left: `${scrollProgress}%`,
            transform: "translateX(-50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
};

export default ScrollProgress;
