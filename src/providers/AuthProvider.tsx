import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const auth0 = useAuth0();

  return (
    <AuthContext.Provider value={auth0}>
      {children}
    </AuthContext.Provider>
  );
};


