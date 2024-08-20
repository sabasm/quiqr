import { UserService } from '../../app/users/services/UserService';

describe('UserService', () => {
  it('should get all users', async () => {
    const users = await UserService.getAllUsers();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  it('should get a user by ID', async () => {
    const userId = '131415';
    const user = await UserService.getUserById(userId);
    expect(user).toBeDefined();
    expect(user.id).toBe(userId);
  });
});


