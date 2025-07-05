import React from 'react';
import useSmoothScroll from '../utils/useSmoothScroll';
import ScrollIndicator from '../components/ScrollIndicator';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useSmoothScroll();

  return (
    <div className="flex bg-black text-white min-h-screen font-sans transition-colors duration-500">
      <Sidebar />
      <div className="flex-1 ml-64">
        <ScrollIndicator />
        <main className="relative z-10 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
