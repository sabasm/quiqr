import { User, IUser } from '../../../entities/User';
import { UserRepository } from '../../../repository/UserRepository';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { hash } from 'bcrypt';

export interface IUserService {
  createUser(createUserDto: CreateUserDto): Promise<IUser>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<IUser | null>;
  deleteUser(id: string): Promise<boolean>;
  getAllUsers(): Promise<IUser[]>;
}

export class UserService implements IUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const passwordHash = await hash(createUserDto.password, 10);
    const user = new User(
      Date.now().toString(),
      createUserDto.email,
      createUserDto.name,
      createUserDto.role || 'user',
      passwordHash
    );
    return this.userRepository.create(user);
  }

  async getUserById(id: string): Promise<IUser | null> {
    return this.userRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return this.userRepository.findByEmail(email);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<IUser | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;

    if (updateUserDto.name) user.name = updateUserDto.name;
    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.role) user.role = updateUserDto.role;
    if (updateUserDto.password) {
      user.passwordHash = await hash(updateUserDto.password, 10);
    }
    user.updatedAt = new Date();

    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

