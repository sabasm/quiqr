import { useState, useEffect } from 'react';
import { ProfileService } from '../services/ProfileService';
import { Profile } from '../types/Profile';

export const useProfile = (userId: string) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileService = new ProfileService();
        const data = await profileService.getProfileByUserId(userId);
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
};


