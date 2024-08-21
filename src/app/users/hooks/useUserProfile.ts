import { useState, useEffect } from 'react';
import { UserService } from '../services/UserService';
import { User } from '../../../entities/User';

export const useUserProfile = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userService = new UserService();
        const fetchedUser = await userService.getUserById(userId);
        setUser(fetchedUser);
      } catch (err) {
        setError('Failed to fetch user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};


