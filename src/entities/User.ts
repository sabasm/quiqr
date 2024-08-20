import { Entity } from './entity.abstract';

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User extends Entity implements IUser {
  email: string;
  name: string;
  role: 'user' | 'admin';
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, email: string, name: string, role: 'user' | 'admin', passwordHash: string) {
    super(id);
    this.email = email;
    this.name = name;
    this.role = role;
    this.passwordHash = passwordHash;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}


