import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useThemeContext();
  return <>{children}</>;
};


