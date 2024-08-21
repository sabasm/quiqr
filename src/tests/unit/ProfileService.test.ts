import { ProfileService } from '../../services/ProfileService';

describe('ProfileService', () => {
  const profileService = new ProfileService();

  it('should retrieve the profile', async () => {
    const userId = 'user123';
    const profile = await profileService.getProfileByUserId(userId);
    expect(profile).toBeDefined();
  });

  it('should update the profile', async () => {
    const userId = 'user123';
    const updateData = { name: 'Updated Name' };
    const updatedProfile = await profileService.updateProfile(userId, updateData);
    expect(updatedProfile).toBeDefined();
    expect(updatedProfile.name).toBe('Updated Name');
  });
});


