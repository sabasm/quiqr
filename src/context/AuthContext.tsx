import { createContext, useContext } from 'react';
import { User } from '../types/User';

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

