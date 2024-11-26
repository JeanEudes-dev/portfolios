"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const achievementsData = [
    {
        title: "IBM Full Stack Software Developer",
        organization: "IBM on Coursera",
        date: "2024",
        badge: "/portfolios/Certificate.png", // Replace with the actual badge image path
        link: "https://coursera.org/share/b58ccbf7f245c970b31b5168ab2f2866", // Replace with your certificate URL
        type: "certification",
    },
    {
        title: "Python for Data Science",
        organization: "Simplilearn",
        date: "2023",
        badge: "/python-badge.png", // Replace with the actual badge image path
        link: "https://www.coursera.org", // Replace with your certificate URL
        type: "certification",
    },
    {
        title: "Responsive Web Design",
        organization: "freeCodeCamp",
        date: "2023",
        badge: "/web-design-badge.png", // Replace with the actual badge image path
        link: "https://www.freecodecamp.org", // Replace with your certificate URL
        type: "certification",
    },
    {
        title: "Academic Excellence Award",
        description: "Recognized for outstanding performance in software engineering studies.",
        date: "2022",
        icon: "🎓",
        type: "achievement",
    },
    {
        title: "Scholarship for Academic Excellence",
        description: "Awarded a financial scholarship for exceptional academic performance.",
        date: "2020",
        icon: "🏆",
        type: "achievement",
    },
];


const Achievements = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage("");
    };

    return (
        <section id="achievements" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
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
                    Highlights of my certifications and achievements throughout my journey.
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
                                <Image
                                    src={item.badge || "/default-badge.jpg"}
                                    alt={`${item.title} Badge`}
                                    className="w-24 h-24 mb-4 shadow-lg hover:scale-110 cursor-pointer"
                                    onClick={() => openModal(item.badge || "/default-badge.jpg")}
                                    width={100}
                                    height={100}
                                />
                            ) : (
                                <span className="text-4xl mb-4" aria-label={item.title}>
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

            {/* Modal for Image */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-red-500"
                        >
                            ✖
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Enlarged Achievement"
                            className="w-full max-w-md h-auto rounded-lg"
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            )}

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
