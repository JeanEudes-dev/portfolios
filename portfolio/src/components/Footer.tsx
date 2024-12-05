"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Links */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold text-indigo-500 mb-4">
                        Quick Links
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#home"
                                className="hover:text-indigo-400 transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#about"
                                className="hover:text-indigo-400 transition duration-300"
                            >
                                About Me
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#projects"
                                className="hover:text-indigo-400 transition duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-indigo-400 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold text-indigo-500 mb-4">
                        Connect with Me
                    </h3>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/JeanEudes-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-indigo-400 transition duration-300"
                            title="github"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/jean-eudes-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-indigo-400 transition duration-300"
                            title="Linkedin"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Twitter"
                            className="text-gray-300 hover:text-indigo-400 transition duration-300"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    className="text-center md:text-right"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-lg font-semibold text-indigo-500 mb-4">
                        Contact
                    </h3>
                    <p>
                        <a
                            href="mailto:eudesmails@gmail.com"
                            className="hover:text-indigo-400 transition duration-300"
                        >
                            eudesmails@gmail.com
                        </a>
                    </p>
                    <p>
                        <a
                            href="tel:+1234567890"
                            className="hover:text-indigo-400 transition duration-300"
                        >
                            +229 402 84 032
                        </a>
                    </p>
                </motion.div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-700 mt-8 pt-4">
                {/* Copyright */}
                <motion.p
                    className="text-center text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    © 2024 Jean-Eudes Assogba. All Rights Reserved.
                </motion.p>
            </div>

            {/* Back to Top Button */}
            <motion.div
                className="fixed bottom-4 right-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <a
                    href="#home"
                    className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
                >
                    ↑
                </a>
            </motion.div>
        </footer>
    );
};

export default Footer;
