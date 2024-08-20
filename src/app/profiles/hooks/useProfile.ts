import { useState, useEffect } from 'react';
import { IProfile } from '../../../entities/Profile';
import { ProfileService, IProfileService } from '../services/ProfileService';

export const useProfile = (userId: string) => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileService: IProfileService = new ProfileService();
        const fetchedProfile = await profileService.getProfileByUserId(userId);
        setProfile(fetchedProfile);
      } catch (err) {
        setError('Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
};


