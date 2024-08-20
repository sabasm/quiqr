import React, { useState } from 'react';
import { SecurityContext } from '../context/SecurityContext';

export const SecurityProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(false);

  const toggleSecurity = () => setIsSecure(prev => !prev);

  return (
    <SecurityContext.Provider value={{ isSecure, toggleSecurity }}>
      {children}
    </SecurityContext.Provider>
  );
};


