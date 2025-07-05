import React, { useState } from 'react';
import useSmoothScroll from '../utils/useSmoothScroll';
import ScrollIndicator from '../components/ScrollIndicator';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useSmoothScroll();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-black text-white min-h-screen font-sans transition-colors duration-500">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 md:ml-[40%] w-full">
        <ScrollIndicator />
        <header className="md:hidden p-4 flex justify-end">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaBars />
          </button>
        </header>
        <main className="relative z-10 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;