"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const [inView, setInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: t('skills.categories.frontend'),
      icon: "🎨",
      color: "from-blue-400 to-purple-500",
      bgGlow: "bg-blue-500/10",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
      ],
    },
    {
      category: t('skills.categories.backend'),
      icon: "⚙️",
      color: "from-green-400 to-teal-500",
      bgGlow: "bg-green-500/10",
      skills: [
        { name: "Django", level: 85, icon: "🐍" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "Flask", level: 80, icon: "🔥" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "RESTful APIs", level: 87, icon: "🔗" },
        { name: "GraphQL", level: 75, icon: "◈" },
      ],
    },
    {
      category: t('skills.categories.devops'),
      icon: "🔧",
      color: "from-orange-400 to-red-500",
      bgGlow: "bg-orange-500/10",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "CI/CD", level: 78, icon: "🔄" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Figma", level: 80, icon: "🎯" },
      ],
    },
    {
      category: t('skills.categories.ai'),
      icon: "🤖",
      color: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/10",
      skills: [
        { name: "Voiceflow", level: 85, icon: "🎙️" },
        { name: "AI Prompting", level: 88, icon: "🧠" },
        { name: "Automation", level: 82, icon: "⚡" },
        { name: "Data Analysis", level: 80, icon: "📊" },
        { name: "Machine Learning", level: 75, icon: "🤖" },
        { name: "API Integration", level: 90, icon: "🔌" },
      ],
    },
  ];

  return (
    <div ref={skillsRef} className="space-y-12 relative">
      {/* Floating background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse delay-300"></div>
      </div>

      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          className="relative group"
        >
          {/* Enhanced hover background with glassmorphism */}
          <div className="absolute -inset-6 rounded-2xl transition-all duration-500 lg:group-hover:bg-gradient-to-br lg:group-hover:from-slate-800/50 lg:group-hover:to-slate-700/30 lg:group-hover:shadow-2xl lg:group-hover:shadow-slate-900/25 lg:group-hover:backdrop-blur-sm"></div>

          <div className="relative z-10 p-6 rounded-xl">
            {/* Category Header with Glow Effect */}
            <div className="flex items-center mb-6 relative">
              <div
                className={`absolute -inset-2 rounded-full ${category.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative flex items-center">
                <motion.span
                  className="text-3xl mr-4 filter drop-shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.span>
                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
              </div>
            </div>

            {/* Skills Grid with Enhanced Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                  className="space-y-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:transform hover:scale-105 group/skill"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg group-hover/skill:animate-bounce">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-semibold text-slate-200 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.3 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer transform -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000"></div>
                      </motion.div>
                    </div>

                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} blur-sm opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Enhanced Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: skillCategories.length * 0.2 }}
        className="relative group mt-12"
      >
        <div className="absolute -inset-6 rounded-2xl transition-all duration-500 lg:group-hover:bg-gradient-to-br lg:group-hover:from-slate-800/50 lg:group-hover:to-slate-700/30 lg:group-hover:shadow-2xl lg:group-hover:backdrop-blur-sm"></div>

        <div className="relative z-10 p-6">
          <div className="flex items-center mb-6">
            <motion.span
              className="text-3xl mr-4 filter drop-shadow-lg"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎯
            </motion.span>
            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              {t('skills.additional')}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Agile Development",
              "Code Review",
              "Performance Optimization",
              "UX/UI Design",
              "SEO",
              "Team Leadership",
              "Technical Writing",
              "Problem Solving",
              "Cross-functional Collaboration",
              "Mentorship",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: skillCategories.length * 0.2 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)",
                }}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-400/20 px-4 py-2 text-sm font-medium text-teal-300 hover:text-teal-200 hover:border-teal-400/40 transition-all duration-300 cursor-default backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
