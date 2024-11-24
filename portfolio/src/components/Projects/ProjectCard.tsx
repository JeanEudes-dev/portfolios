"use client";

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiDjango } from "react-icons/si";

export const techIcons: Record<string, JSX.Element> = {
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <FaJs className="text-yellow-500" />,
    React: <FaReact className="text-cyan-400" />,
    Python: <FaPython className="text-blue-300" />,
    Node: <FaNodeJs className="text-green-400" />,
    Django: <SiDjango className="text-blue-500" />,
    MySQL: <PiFileSqlDuotone className="text-blue-500" />,
};


interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    links: { live?: string; github: string };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, links }) => {
    return (
        <div className="z-9999 relative bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-md opacity-20"></div>

            <div className="relative">
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 text-blue-300">{title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">{description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-600 text-xs text-gray-200 px-2 py-1 rounded-full flex items-center gap-1"
                        >{techIcons[tech] || null}
                            <span>{tech}</span>
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 z-9999">
                    {links.live && (
                        <a
                            href={links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="z-9999 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>
                    )}
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 z-9999 hover:bg-gray-900 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
