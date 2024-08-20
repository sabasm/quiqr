import React, { createContext, useState, useContext } from 'react';

interface SecurityContextType {
  isSecure: boolean;
  setSecure: (value: boolean) => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(false);

  const setSecure = (value: boolean) => {
    setIsSecure(value);
  };

  return (
    <SecurityContext.Provider value={{ isSecure, setSecure }}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurityContext must be used within a SecurityProvider');
  }
  return context;
};


