import { PrismaClient } from '@prisma/client';
import { Profile, IProfile } from '../entities/Profile';
import { AbstractRepository } from './repository.abstract';

export interface IProfileRepository {
  findAll(): Promise<IProfile[]>;
  findById(id: string): Promise<IProfile | null>;
  findByUserId(userId: string): Promise<IProfile | null>;
  create(profile: IProfile): Promise<IProfile>;
  update(id: string, profile: Partial<IProfile>): Promise<IProfile | null>;
  delete(id: string): Promise<boolean>;
}

export class ProfileRepository extends AbstractRepository<Profile> implements IProfileRepository {
  private prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<IProfile[]> {
    const profiles = await this.prisma.profile.findMany();
    return profiles.map(p => new Profile(p.id, p.userId, p.bio, p.avatarUrl));
  }

  async findById(id: string): Promise<IProfile | null> {
    const profile = await this.prisma.profile.findUnique({ where: { id } });
    return profile ? new Profile(profile.id, profile.userId, profile.bio, profile.avatarUrl) : null;
  }

  async findByUserId(userId: string): Promise<IProfile | null> {
    const profile = await this.prisma.profile.findUnique({ where: { userId } });
    return profile ? new Profile(profile.id, profile.userId, profile.bio, profile.avatarUrl) : null;
  }

  async create(profile: IProfile): Promise<IProfile> {
    const createdProfile = await this.prisma.profile.create({
      data: {
        userId: profile.userId,
        bio: profile.bio,
        avatarUrl: profile.avatarUrl,
      },
    });
    return new Profile(createdProfile.id, createdProfile.userId, createdProfile.bio, createdProfile.avatarUrl);
  }

  async update(id: string, profile: Partial<IProfile>): Promise<IProfile | null> {
    const updatedProfile = await this.prisma.profile.update({
      where: { id },
      data: profile,
    });
    return new Profile(updatedProfile.id, updatedProfile.userId, updatedProfile.bio, updatedProfile.avatarUrl);
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.profile.delete({ where: { id } });
    return true;
  }
}


