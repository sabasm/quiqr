import React from 'react';
import { AuthProvider } from './AuthProvider';
import { ThemeProvider } from './ThemeProvider';
import { SecurityProvider } from './SecurityProvider';

export const MasterProvider: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <SecurityProvider>
        {children}
      </SecurityProvider>
    </ThemeProvider>
  </AuthProvider>
);


