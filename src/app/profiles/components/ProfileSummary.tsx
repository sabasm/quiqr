import React from 'react';
import { IProfile } from '../types/IProfile';
interface ProfileSummaryProps {
  profile: IProfile;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ profile }) => (
  <div>
    <h1>{profile.name}</h1>
  </div>
);

export default ProfileSummary;


