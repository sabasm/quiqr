import { ProfileService } from '../../app/profiles/services/ProfileService';

describe('ProfileService', () => {
  it('should get a profile by user ID', async () => {
    const userId = '123';
    const profile = await ProfileService.getProfile(userId);
    expect(profile).toBeDefined();
    expect(profile.userId).toBe(userId);
  });

  it('should update a profile', async () => {
    const userId = '123';
    const updateData = { name: 'New Name' };
    const updatedProfile = await ProfileService.updateProfile(userId, updateData);
    expect(updatedProfile.name).toBe('New Name');
  });
});


