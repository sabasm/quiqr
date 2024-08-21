import React from 'react';
import { UserProfile } from '../components/UserProfile';
import { Main } from '../../../shared/components/Main';

interface UserPageProps {
  params: { id: string };
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <UserProfile userId={params.id} />
    </Main>
  );

