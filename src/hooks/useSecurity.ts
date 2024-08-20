import { useContext } from 'react';
import { SecurityContext } from '../context/SecurityContext';

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};


