
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';
import Typewriter from './Typewriter';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/JeanEudes-dev' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/jean-eudes-assogba/' },
    { icon: <FaEnvelope />, url: 'mailto:eudesmails@gmail.com' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-black text-white p-8 flex flex-col justify-between border-r border-gray-medium transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        w-full md:w-2/5`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl md:hidden">
        <FaTimes />
      </button>
      <div>
        <h1 className="text-5xl font-bold mb-4">Jean-Eudes ASSOGBA</h1>
        <div className="text-xl font-light text-gray-light h-16">
          <Typewriter 
            text={[
              'Full-Stack Software Engineer',
              'React & Django Expert',
              'Cloud & AI Integration Specialist',
            ]}
            loop={true}
          />
        </div>
        <nav className="mt-12">
          <ul className="space-y-6">
            <li><a href="#home" onClick={onClose} className="text-white hover:text-gray-light transition-colors text-2xl">Home</a></li>
            <li><a href="#projects" onClick={onClose} className="text-white hover:text-gray-light transition-colors text-2xl">Projects</a></li>
            <li><a href="#about" onClick={onClose} className="text-white hover:text-gray-light transition-colors text-2xl">About</a></li>
            <li><a href="#contact" onClick={onClose} className="text-white hover:text-gray-light transition-colors text-2xl">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-start space-y-6">
        <a href="/src/assets/Jean-Eudes_ASSOGBA_dev.pdf" download className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all rounded-md text-lg">
          Download CV
        </a>
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-light transition-colors text-3xl">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
