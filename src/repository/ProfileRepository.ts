import { PrismaClient } from '@prisma/client';
import { Profile } from '../entities/Profile';

export class ProfileRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async findByUserId(userId: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({ where: { userId } });
  }

  async create(data: Partial<Profile>): Promise<Profile> {
    return this.prisma.profile.create({ data });
  }

  async update(id: string, data: Partial<Profile>): Promise<Profile | null> {
    return this.prisma.profile.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.profile.delete({ where: { id } });
    return true;
  }
}


