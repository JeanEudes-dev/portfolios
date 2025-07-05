import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useSmoothScroll from '../utils/useSmoothScroll';
import ParticleBackground from '../components/ParticleBackground';
import ScrollIndicator from '../components/ScrollIndicator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useSmoothScroll();

  return (
    <div className="bg-dark-bg text-text-light min-h-screen font-sans transition-colors duration-500">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-dark-bg via-dark-surface to-accent-blue animate-gradient-xy -z-10"></div>
      <ParticleBackground />
      <Header />
      <ScrollIndicator />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;