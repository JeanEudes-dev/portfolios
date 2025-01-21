"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen bg-gray-100 dark:bg-gray-900 items-center justify-center px-6 sm:px-12">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full space-y-8 lg:space-y-0">
                {/* Left Side (Text) */}
                <div className="text-white space-y-6 max-w-lg lg:text-left text-center">
                    {/* Name */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold whitespace-nowrap"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        Jean-Eudes Assogba
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        className="text-lg sm:text-xl lg:text-2xl font-medium"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Full Stack Software Engineer
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Passionate about building scalable and innovative web applications.
                    </motion.p>

                    {/* Buttons */}
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4 mt-6">
                        <motion.button
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300 hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="/portfolios/Jean-Eudes_ASSOGBA_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                            </a>
                        </motion.button>

                        <Link
                            href="https://github.com/JeanEudes-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-full transition duration-300 hover:shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                            >
                                GitHub
                            </motion.button>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/jean-eudes-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 hover:shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                            >
                                LinkedIn
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Right Side (Image) */}
                <motion.div
                    className="w-3/4 sm:w-1/2 lg:w-1/3 flex items-center justify-center lg:justify-end"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    whileHover={{ x: 5, y: 5, rotate: 2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/portfolios/me.jpg"
                        alt="Jean-Eudes Assogba - Full Stack Developer"
                        width={300}
                        height={400}
                        className="w-full max-w-xs rot sm:max-w-sm lg:max-w-md rounded-xl border-4 border-white shadow-lg hover:shadow-2xl transition duration-300"
                    />
                </motion.div>
            </div>
        </section>
    );
}
