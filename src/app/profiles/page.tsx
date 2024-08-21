import React from 'react';
import ProfileForm from './components/ProfileForm';
import ProfileSummary from './components/ProfileSummary';
import { IProfile } from './types/IProfile';

const ProfilePage: React.FC<{ profile: IProfile }> = ({ profile }) => {
  const handleFormSubmit = (data: any) => {
    console.log('Profile updated', data);
  };

  return (
    <div>
      <ProfileSummary profile={profile} />
      <ProfileForm onSubmit={handleFormSubmit} initialValues={profile} />
    </div>
  );
};

export default ProfilePage;


