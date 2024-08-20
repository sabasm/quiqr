import React from 'react';
import { useProfile } from '../hooks/useProfile';
import { useAuth } from '../../../hooks/useAuth';

export const ProfileSummary: React.FC = () => {
  const { user } = useAuth();
  const { profile, loading, error } = useProfile(user?.id || '');

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold">{profile.bio}</h2>
      <img src={profile.avatarUrl} alt="Profile Avatar" className="w-32 h-32 rounded-full" />
    </div>
  );
};


