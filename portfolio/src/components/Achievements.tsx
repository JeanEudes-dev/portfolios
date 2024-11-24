"use client";

import React from "react";
import { motion } from "framer-motion";

const achievementsData = [
    {
        title: "IBM Full Stack Software Developer",
        organization: "Coursera",
        date: "2024",
        badge: "/path-to-badge-image.jpg", // Replace with your badge image
        link: "https://www.coursera.org", // Replace with your certificate URL
        type: "certification",
    },
    {
        title: "Python for Data Science",
        organization: "Coursera",
        date: "2023",
        badge: "/path-to-badge-image.jpg",
        link: "https://www.coursera.org",
        type: "certification",
    },
    {
        title: "Academic Excellence Award",
        description:
            "Recognized for outstanding performance in software engineering studies.",
        date: "2022",
        icon: "🎓",
        type: "achievement",
    },
];

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="py-16 px-4 bg-gray-100 dark:bg-gray-900"
        >
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Achievements & Certifications
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 mt-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Highlights of my certifications and achievements throughout my
                    journey.
                </motion.p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {achievementsData.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`shadow-md rounded-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-300 ${item.type === "certification"
                            ? "bg-indigo-100 dark:bg-indigo-800"
                            : "bg-green-100 dark:bg-green-800"
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Content */}
                        <div className="flex flex-col items-center text-center">
                            {/* Icon or Badge */}
                            {item.type === "certification" ? (
                                <img
                                    src={item.badge || "/default-badge.jpg"}
                                    alt={`${item.title} Badge`}
                                    className="w-16 h-16 mb-4 rounded-full shadow-lg hover:rotate-3 transition-transform"
                                />
                            ) : (
                                <span
                                    className="text-4xl mb-4"
                                    aria-label={item.title}
                                >
                                    {item.icon}
                                </span>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                {item.title}
                            </h3>

                            {/* Organization/Description */}
                            {item.organization && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {item.organization}
                                </p>
                            )}
                            {item.description && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {item.description}
                                </p>
                            )}

                            {/* Date */}
                            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                                {item.date}
                            </p>

                            {/* Link (if available) */}
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-500 dark:text-indigo-400 mt-4 inline-block"
                                >
                                    View Certificate
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <motion.a
                    href="#contact"
                    className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Want to see more? Contact Me
                </motion.a>
            </div>
        </section>
    );
};

export default Achievements;
