import { UserService } from "@/app/users/services";

const userService = new UserService();

describe('UserService', () => {
  it('should retrieve all users', async () => {
    const users = await userService.getAllUsers();
    expect(users).toBeDefined();
  });

  it('should retrieve user by ID', async () => {
    const userId = 'user123';
    const user = await userService.getUserById(userId);
    expect(user).toBeDefined();
  });
});

