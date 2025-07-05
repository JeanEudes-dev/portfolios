
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/JeanEudes-dev' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/jean-eudes-assogba/' },
    { icon: <FaEnvelope />, url: 'mailto:eudesmails@gmail.com' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-black text-white p-8 flex flex-col justify-between border-r border-gray-medium">
      <div>
        <h1 className="text-3xl font-bold mb-8">Jean-Eudes ASSOGBA</h1>
        <nav>
          <ul className="space-y-4">
            <li><a href="#home" className="text-white hover:text-gray-light transition-colors text-lg">Home</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-light transition-colors text-lg">Projects</a></li>
            <li><a href="#about" className="text-white hover:text-gray-light transition-colors text-lg">About</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-light transition-colors text-lg">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-start space-y-4">
        <a href="/src/assets/Jean-Eudes_ASSOGBA_dev.pdf" download className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded-md">
          Download CV
        </a>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-light transition-colors text-xl">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
