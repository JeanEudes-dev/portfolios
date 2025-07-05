
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ThemeProvider from './components/ThemeProvider';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CustomCursor />
        <HomePage />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
