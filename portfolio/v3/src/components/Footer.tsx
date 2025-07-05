
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/JeanEudes-dev' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/jean-eudes-assogba/' },
    { icon: <FaEnvelope />, url: 'mailto:eudesmails@gmail.com' },
  ];

  return (
    <footer className="py-8 bg-dark-surface">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jean-Eudes ASSOGBA. All Rights Reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-blue transition-colors text-xl">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
