"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects: React.FC = () => {
    return (
        <section className="relative w-full py-16 bg-gray-900">
            {/* Section Title */}
            <div className="text-center space-y-4 max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white-400">
                    My Projects
                </h2>
                <p className="text-gray-400 text-lg">
                    A showcase of the projects I’ve built using modern tools and frameworks.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
