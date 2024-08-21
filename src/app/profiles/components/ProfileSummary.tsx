import React from 'react';
import { useProfile } from '../hooks/useProfile';

interface ProfileSummaryProps {
  userId: string;
}

export const ProfileSummary: React.FC<ProfileSummaryProps> = ({ userId }) => {
  const { profile, loading, error } = useProfile(userId);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
      <p className="mb-2">{profile.bio}</p>
      <img src={profile.avatarUrl} alt="Profile Avatar" className="w-32 h-32 rounded-full" />
    </div>
  );
};


