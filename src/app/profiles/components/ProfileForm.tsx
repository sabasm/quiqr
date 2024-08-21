import React from 'react';
import { useForm } from 'react-hook-form';
import { useProfile } from '../hooks/useProfile';
import { ProfileService } from '../services/ProfileService';
import { UpdateProfileDto } from '../dto/UpdateProfileDto';

interface ProfileFormProps {
  userId: string;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ userId }) => {
  const { profile, loading, error, mutate } = useProfile(userId);
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateProfileDto>();

  const onSubmit = async (data: UpdateProfileDto) => {
    try {
      const profileService = new ProfileService();
      await profileService.updateProfile(profile!.id, data);
      mutate();
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          defaultValue={profile.name}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="bio" className="block mb-1">Bio</label>
        <textarea
          id="bio"
          {...register('bio')}
          defaultValue={profile.bio}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Update Profile
      </button>
    </form>
  );
};


