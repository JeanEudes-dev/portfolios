"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "experience", "projects"];
            const scrollPos = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItemVariants = {
        hidden: { x: -40 },
        visible: { x: 0, transition: { duration: 0.1 } },
    };

    return (
        <aside className="lg:fixed lg:top-0 p-6 lg:flex lg:flex-col justify-between lg:left-0 lg:top-0 lg:h-full lg:w-[48%] lg:p-20">
            {/* Header Section */}
            <motion.div
                className="flex flex-col items-center lg:items-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl lg:text-5xl font-bold ">
                    Jean-Eudes Assogba
                </h1>
                <h2 className="text-md lg:text-xl  mt-2">
                    Full-Stack Software Engineer
                </h2>
                <p className="hidden lg:block text-sm lg:text-md  mt-4 leading-relaxed">
                    I design and develop high-quality, modern, and scalable web
                    applications.
                </p>
            </motion.div>

            {/* Navigation */}
            <motion.nav
                className="hidden lg:flex lg:flex-col"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                <motion.ul className="space-y-8">
                    {["About", "Experience", "Projects"].map((item, index) => {
                        const sectionId = item.toLowerCase();
                        const isActive = activeSection === sectionId;

                        return (
                            <motion.li
                                key={index}
                                variants={navItemVariants}
                                onClick={() => {
                                    setActiveSection(sectionId);
                                    window.location.hash = `#${sectionId}`;
                                }}
                            >
                                <Link
                                    href={`#${sectionId}`}
                                    className={`text-lg text-white flex items-center group transition duration-300 ${isActive ? "active" : ""
                                        }`}
                                >
                                    {/* Animated Indicator */}
                                    <span
                                        className={`nav-indicator mr-4 h-px  ${isActive
                                            ? "w-16 bg-slate-200 "
                                            : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 w-8"
                                            } transition-all motion-reduce:transition-none`}
                                    ></span>

                                    {/* Animated Text */}
                                    <span
                                        className={`nav-text text-xs font-bold uppercase tracking-widest ${isActive
                                            ? "text-slate-200 scale-105 translate-x-2"
                                            : "text-slate-500 group-hover:text-slate-200 group-hover:scale-105 group-hover:translate-x-2"
                                            } transition motion-reduce:transition-none`}
                                    >
                                        {item}
                                    </span>
                                </Link>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </motion.nav>

            <div className="mt-6">
                <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/Jean-Eudes_ASSOGBA_resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                    <span>
                        View&nbsp;
                        <span className="inline-block">
                            Résumé
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 justify-center mt-4">
                {[{ href: "https://github.com/JeanEudes-dev", Icon: FaGithub },
                { href: "https://www.linkedin.com/in/jean-eudes-dev", Icon: FaLinkedin },
                { href: "https://x.com/eudes_asg", Icon: BsTwitterX },
                { href: "https://instagram.com/eudes_lsl", Icon: FaInstagram },
                { href: "mailto:eudesmails@gmail.com", Icon: FaEnvelope },
                ].map(({ href, Icon }) => (
                    <motion.div
                        key={href}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                    >
                        <Link href={href} target={href === 'me' ? "_blank" : ""} rel="noopener noreferrer">
                            <Icon className="text-white hover:text-teal-400 text-2xl transition duration-300" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
