import { ApiService } from '../../../services/ApiService';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { User } from '../types';

export class UserApi {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getAllUsers(): Promise<User[]> {
    return this.apiService.get<User[]>('/users');
  }

  async getUserById(id: string): Promise<User> {
    return this.apiService.get<User>(`/users/${id}`);
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    return this.apiService.post<User>('/users', userData);
  }

  async updateUser(id: string, userData: UpdateUserDto): Promise<User> {
    return this.apiService.put<User>(`/users/${id}`, userData);
  }

  async deleteUser(id: string): Promise<void> {
    return this.apiService.delete(`/users/${id}`);
  }
}


