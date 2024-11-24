"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects = () => {
    return (
        <section
            className="relative w-full py-16 "
        >
            {/* Section Title */}
            <div className="relative z-10 text-white space-y-8 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            links={project.links}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
