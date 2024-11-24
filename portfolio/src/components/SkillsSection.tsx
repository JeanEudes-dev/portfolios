"use client";

import React from "react";
import { FaPython, FaJs, FaCogs, FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

// Icons for skills
const skillIcons: Record<string, JSX.Element> = {
    Python: <FaPython className="text-blue-500" aria-label="Python Icon" />,
    JavaScript: <FaJs className="text-yellow-500" aria-label="JavaScript Icon" />,
    Cpp: <FaCogs className="text-gray-500" aria-label="C++ Icon" />,
    React: <FaReact className="text-cyan-400" aria-label="React Icon" />,
    Git: <FaGitAlt className="text-orange-500" aria-label="Git Icon" />,
    Docker: <FaDocker className="text-blue-600" aria-label="Docker Icon" />,
};

interface Skill {
    name: string;
    level: number; // Level 0-100
    icon: JSX.Element;
}

const skills: Record<string, Skill[]> = {
    "Programming Languages": [
        { name: "Python", level: 85, icon: skillIcons.Python },
        { name: "JavaScript", level: 80, icon: skillIcons.JavaScript },
        { name: "C++", level: 70, icon: skillIcons.Cpp },
    ],
    "Frameworks & Libraries": [
        { name: "React", level: 90, icon: skillIcons.React },
    ],
    "Tools & Technologies": [
        { name: "Git", level: 80, icon: skillIcons.Git },
        { name: "Docker", level: 75, icon: skillIcons.Docker },
    ],
};

const SkillCard: React.FC<Skill> = ({ name, level, icon }) => {
    return (
        <motion.div
            className="skill-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }} // Scale on hover
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="text-center mb-4">
                <div className="text-4xl mb-2">{icon}</div>
                <h4 className="text-lg text-white font-semibold">{name}</h4>
            </div>

            {/* Progress Bar */}
            <motion.div
                className="progress-bar-container bg-gray-600 rounded-full h-2 overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <div
                    className="progress-bar bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
            </motion.div>

            {/* Skill Level */}
            <div className="text-center text-xs text-gray-400 mt-2">{`${level}%`}</div>
        </motion.div>
    );
};

const SkillsSection: React.FC = () => {
    return (
        <section className="skills-section py-16 bg-gray-900 text-white px-10">
            <motion.h2
                className="text-4xl text-center mb-8 font-bold"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                My Skills
            </motion.h2>
            <motion.div
                className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
            >
                {Object.keys(skills).map((category) => (
                    <div key={category}>
                        <motion.h3
                            className="text-2xl font-bold mb-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {category}
                        </motion.h3>
                        <div className="grid gap-6">
                            {skills[category].map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsSection;
