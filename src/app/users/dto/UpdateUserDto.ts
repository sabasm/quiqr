export interface UpdateUserDto {
  email?: string;
  name?: string;
  password?: string;
  role?: 'user' | 'admin';
}


