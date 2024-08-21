import { PrismaClient } from '@prisma/client';
import { Profile } from '../entities/Profile';

export class ProfileService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getProfileByUserId(userId: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async createProfile(data: Partial<Profile>): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
  }

  async updateProfile(userId: string, data: Partial<Profile>): Promise<Profile> {
    return this.prisma.profile.update({
      where: { userId },
      data,
    });
  }
}


