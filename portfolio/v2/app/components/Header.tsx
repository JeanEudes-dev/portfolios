"use client";

import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a192f]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-teal-400 text-xl font-bold">JE</div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-8 text-[#ccd6f6] text-sm font-medium">
                    {["About", "Projects", "Experience", "Contact"].map((item, index) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-teal-400 transition duration-300"
                            >
                                <span className="text-teal-400 mr-1">{`0${index + 1}.`}</span> {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block px-4 py-2 border border-teal-400 text-teal-400 rounded-md text-sm hover:bg-teal-400 hover:text-[#0a192f] transition duration-300"
                >
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-teal-400 cursor-pointer">
                    {/* Add mobile menu icon here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
