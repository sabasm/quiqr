export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}


