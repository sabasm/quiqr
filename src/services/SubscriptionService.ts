import { PrismaClient } from '@prisma/client';
import { Subscription } from '../entities/Subscription';

export class SubscriptionService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createSubscription(data: Partial<Subscription>): Promise<Subscription> {
    return this.prisma.subscription.create({ data });
  }

  async updateSubscription(id: string, data: Partial<Subscription>): Promise<Subscription | null> {
    return this.prisma.subscription.update({ where: { id }, data });
  }

  async findSubscriptionByUserId(userId: string): Promise<Subscription | null> {
    return this.prisma.subscription.findUnique({ where: { userId } });
  }

  async findAllSubscriptions(): Promise<Subscription[]> {
    return this.prisma.subscription.findMany();
  }
}


