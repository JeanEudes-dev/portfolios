"use client";

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    links: {
        live?: string;
        github: string;
    };
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className="relative bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform transform hover:-translate-y-2"
        >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-30 hover:opacity-50 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-White-400 mb-3">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-600 text-xs text-gray-200 px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>
                    )}
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition"
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
