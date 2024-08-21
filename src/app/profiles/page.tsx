import React from 'react';
import { ProfileSummary } from './components/ProfileSummary';
import { ProfileForm } from './components/ProfileForm';
import { Main } from '../../shared/components/Main';
import { useAuth } from '../../hooks/useAuth';

export default function ProfilesPage() {
  const { user } = useAuth();

  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <ProfileSummary userId={user?.id || ''} />
      <ProfileForm userId={user?.id || ''} />
    </Main>
  );
}


