import { PrismaClient } from '@prisma/client';
import { User, IUser } from '../entities/User';
import { AbstractRepository } from './repository.abstract';

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
  update(id: string, user: Partial<IUser>): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}

export class UserRepository extends AbstractRepository<User> implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.prisma.user.findMany();
    return users.map(u => new User(u.id, u.email, u.name, u.role as 'user' | 'admin', u.passwordHash));
  }

  async findById(id: string): Promise<IUser | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? new User(user.id, user.email, user.name, user.role as 'user' | 'admin', user.passwordHash) : null;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? new User(user.id, user.email, user.name, user.role as 'user' | 'admin', user.passwordHash) : null;
  }

  async create(user: IUser): Promise<IUser> {
    const createdUser = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        role: user.role,
        passwordHash: user.passwordHash,
      },
    });
    return new User(createdUser.id, createdUser.email, createdUser.name, createdUser.role as 'user' | 'admin', createdUser.passwordHash);
  }

  async update(id: string, user: Partial<IUser>): Promise<IUser | null> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: user,
    });
    return new User(updatedUser.id, updatedUser.email, updatedUser.name, updatedUser.role as 'user' | 'admin', updatedUser.passwordHash);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.user.delete({ where: { id } });
    return true;
  }
}


