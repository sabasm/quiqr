import { useState, useEffect } from 'react';
import { IProfile } from '../../../entities/Profile';
import { ProfileService } from '../services/ProfileService';
import useSWR from 'swr';

export const useProfile = (userId: string) => {
  const { data: profile, error, mutate } = useSWR<IProfile | null>(
    userId ? `/api/profiles/${userId}` : null,
    async () => {
      const profileService = new ProfileService();
      return profileService.getProfileByUserId(userId);
    }
  );

  return {
    profile,
    loading: !error && !profile,
    error: error ? 'Failed to fetch profile' : null,
    mutate
  };
};


