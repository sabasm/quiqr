import { useState, useEffect } from 'react';
import { Auth0Service } from '../services/Auth0Service';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth0Service = new Auth0Service();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const auth0User = await auth0Service.getUser();
        setIsAuthenticated(!!auth0User);
        setUser(auth0User);
      } catch (error) {
        console.error('Error initializing authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = () => auth0Service.login();
  const logout = () => auth0Service.logout();

  return { isAuthenticated, user, loading, login, logout };
}


