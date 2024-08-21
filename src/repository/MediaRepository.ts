import { PrismaClient } from '@prisma/client';
import { Media } from '../entities/Media';

export class MediaRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<Media[]> {
    return this.prisma.media.findMany();
  }

  async findById(id: string): Promise<Media | null> {
    return this.prisma.media.findUnique({ where: { id } });
  }

  async create(data: Partial<Media>): Promise<Media> {
    return this.prisma.media.create({ data });
  }

  async update(id: string, data: Partial<Media>): Promise<Media | null> {
    return this.prisma.media.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.media.delete({ where: { id } });
    return true;
  }
}


