
import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};

export default ThemeProvider;
