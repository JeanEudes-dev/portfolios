
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../utils/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-dark-surface rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-accent-blue/50 animate-fade-in-up">
      <div className="relative h-56">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dark-bg bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-green text-3xl transition-colors duration-300">
              <FaExternalLinkAlt />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-green text-3xl transition-colors duration-300">
              <FaGithub />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-light group-hover:text-accent-blue transition-colors duration-300">{project.name}</h3>
        <p className="mt-2 text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-dark-bg text-accent-blue text-xs font-bold rounded-full border border-accent-blue/50">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
