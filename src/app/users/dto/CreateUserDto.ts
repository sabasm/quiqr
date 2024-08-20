export interface CreateUserDto {
  email: string;
  name: string;
  password: string;
  role?: 'user' | 'admin';
}


