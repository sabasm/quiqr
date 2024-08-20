import React from 'react';
import { ProfileSummary } from './components/ProfileSummary';
import { Main } from '../../shared/components/Main';

export default function ProfilesPage() {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <ProfileSummary />
    </Main>
  );
}


