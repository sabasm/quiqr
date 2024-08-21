import { PrismaClient, User } from '@prisma/client';
import { hash } from 'bcrypt';

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const passwordHash = await hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: passwordHash,
      },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<boolean> {
    await this.prisma.user.delete({ where: { id } });
    return true;
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}


