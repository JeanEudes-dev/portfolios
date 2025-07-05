
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import GlitchText from './GlitchText';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold text-accent-blue drop-shadow-lg">Jean-Eudes ASSOGBA</div>
          <nav className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              <li><GlitchText><a href="#projects" className="text-text-light hover:text-accent-blue transition-colors duration-300">Projects</a></GlitchText></li>
              <li><GlitchText><a href="#about" className="text-text-light hover:text-accent-blue transition-colors duration-300">About</a></GlitchText></li>
              <li><GlitchText><a href="#contact" className="text-text-light hover:text-accent-blue transition-colors duration-300">Contact</a></GlitchText></li>
            </ul>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
