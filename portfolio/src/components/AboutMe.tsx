"use client"

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";


const AboutMe: React.FC = () => {
    return (
        <section className="about-me py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                {/* Introduction */}
                {/* <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-indigo-400">Jean-Eudes Assogba</h1>
                    <p className="text-xl text-gray-300 mt-2">Full Stack Software Engineer</p>
                    <p className="text-lg text-gray-400 mt-2 italic">Passionate about building scalable and innovative web applications</p>
                </div> */}

                {/* Biography */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    {/* <div className="md:w-1/3 mb-8 md:mb-0">
                        <Image
                            src="/me.jpg"
                            alt="Jean-Eudes Assogba"
                            className="w-40 h-40 rounded-full mx-auto shadow-lg"
                            width={400}
                            height={600}
                        />
                    </div> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}>
                        <div className="md:w-2/3 md:pl-12 mt-50">
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Biography</h2>
                            <p className="text-gray-300">
                                I’m Jean-Eudes Assogba, a passionate Full Stack Software Engineer with a strong background in building dynamic and scalable web applications. My journey into the tech world began during my college years, where I discovered my love for problem-solving through programming.
                            </p>
                            <p className="text-gray-300 mt-4">
                                After completing a software engineering course, I went on to work with various technologies such as React, Django, and Python. I particularly enjoy working on projects that involve solving real-world problems and learning new things.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Skills & Expertise */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Skills & Expertise</h2>
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                            <li className="flex items-center">
                                <span className="mr-3 text-lg">React</span>
                                <span className="inline-block w-8 h-8 bg-blue-500 rounded-full"></span> {/* Icon goes here */}
                            </li>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                            <li className="flex items-center">
                                <span className="mr-3 text-lg">Django</span>
                                <span className="inline-block w-8 h-8 bg-green-600 rounded-full"></span> {/* Icon goes here */}
                            </li>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                            <li className="flex items-center">
                                <span className="mr-3 text-lg">Python</span>
                                <span className="inline-block w-8 h-8 bg-yellow-500 rounded-full"></span> {/* Icon goes here */}
                            </li>
                        </motion.div>
                        {/* Add other skills */}
                    </ul>
                </div>

                {/* Career Goals & Aspirations */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Career Goals & Aspirations</h2>
                        <p className="text-gray-300">
                            My ultimate goal is to continue learning and growing as a software engineer. I aim to work on projects that will positively impact society, particularly in the fields of healthcare and education. I&apos;m passionate about creating solutions that empower users and simplify complex processes.
                        </p>
                    </div></motion.div>

                {/* Professional Philosophy */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Professional Philosophy</h2>
                        <p className="text-gray-300">
                            I believe in writing clean, maintainable code while collaborating with others to build user-centric solutions. I value teamwork and know that together we can achieve more than as individuals. I constantly strive to improve my skills and remain open to feedback and new ideas.
                        </p>
                    </div>
                </motion.div>

                {/* Personal Interests */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Personal Interests</h2>
                        <p className="text-gray-300">
                            Outside of software development, I love reading tech blogs, participating in hackathons, and traveling. I’m always keen to explore new cultures and learn new things that inspire creativity in both my personal and professional life.
                        </p>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <div className="text-center">
                        <a href="/resume" className="inline-block bg-indigo-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
                            Let’s work together!
                        </a>
                    </div>
                </motion.button>
            </div >
        </section >
    );
};

export default AboutMe;
