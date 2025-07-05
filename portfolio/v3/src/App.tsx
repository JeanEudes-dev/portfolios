
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ThemeProvider from './components/ThemeProvider';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
