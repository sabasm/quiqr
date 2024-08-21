import { PrismaClient } from '@prisma/client';
import { Subscription } from '../entities/Subscription';

export class SubscriptionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<Subscription[]> {
    return this.prisma.subscription.findMany();
  }

  async findById(id: string): Promise<Subscription | null> {
    return this.prisma.subscription.findUnique({ where: { id } });
  }

  async findByUserId(userId: string): Promise<Subscription | null> {
    return this.prisma.subscription.findUnique({ where: { userId } });
  }

  async create(data: Partial<Subscription>): Promise<Subscription> {
    return this.prisma.subscription.create({ data });
  }

  async update(id: string, data: Partial<Subscription>): Promise<Subscription | null> {
    return this.prisma.subscription.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.subscription.delete({ where: { id } });
    return true;
  }
}


