"use client"; // Required for client-side interactivity

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa"; // Icons
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Navigation items with icons
    const navItems = [
        { name: "Home", icon: <FaHome />, href: "#home" },
        { name: "About", icon: <FaUser />, href: "#about" },
        { name: "Projects", icon: <FaProjectDiagram />, href: "#projects" },
        { name: "Skills", icon: <FaTools />, href: "#skills" },
        { name: "Contact", icon: <FaEnvelope />, href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="bg-white-900 bg-opacity-60 backdrop-blur-lg text-white sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold transition-transform duration-300 transform hover:scale-110">
                                JeanEudes-dev
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative group flex flex-col items-center"
                                >
                                    {/* Icon */}
                                    <div className="text-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    {/* Text */}
                                    <span className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                title="toggle"
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-400 hover:text-white focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden bg-gray-800 bg-opacity-90 transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 flex items-center justify-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex flex-col items-center space-x-2 mx-4"
                            >
                                {/* Icon */}
                                <div className="text-2xl flex items-center justify-center">{item.icon}</div>
                                {/* Text */}
                                <span className="text-xs">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </motion.nav>
    );
}
