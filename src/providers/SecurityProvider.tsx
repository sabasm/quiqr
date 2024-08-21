import React from 'react';
import { useSecurityContext } from '../context/SecurityContext';

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useSecurityContext();
  return <>{children}</>;
};


