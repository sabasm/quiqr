import { PrismaClient } from '@prisma/client';
import logger from '../../../services/LoggerService';

export class SubscriptionService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createSubscription(data: any) {
    const subscription = await this.prisma.subscription.create({ data });
    if (subscription) {
      logger.info('Subscription created successfully');
    } else {
      logger.error('Failed to create subscription');
    }
    return subscription;
  }

  async updateSubscription(subscriptionId: string, data: any) {
    return this.prisma.subscription.update({ where: { id: subscriptionId }, data });
  }

  async findSubscriptionByUserId(userId: string) {
    return this.prisma.subscription.findUnique({ where: { userId } });
  }

  async findAllSubscriptions() {
    return this.prisma.subscription.findMany();
  }
}


