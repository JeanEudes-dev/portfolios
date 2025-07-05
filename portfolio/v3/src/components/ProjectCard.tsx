
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../utils/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-dark rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-gray-medium/50">
      <div className="relative h-56">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-light text-3xl transition-colors duration-300">
              <FaExternalLinkAlt />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-light text-3xl transition-colors duration-300">
              <FaGithub />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-gray-light transition-colors duration-300">{project.name}</h3>
        <p className="mt-2 text-gray-light">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-black text-white text-xs font-bold rounded-full border border-gray-medium/50">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
