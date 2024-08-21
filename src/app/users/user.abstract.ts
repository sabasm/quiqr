import { User } from './types';

export abstract class AbstractUser implements User {
  abstract id: string;
  abstract name: string;
  abstract email: string;
  abstract role: 'user' | 'admin';
  abstract createdAt: Date;
  abstract updatedAt: Date;

  abstract toJSON(): Record<string, any>;
}


