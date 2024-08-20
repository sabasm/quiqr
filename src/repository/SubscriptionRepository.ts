import { PrismaClient } from '@prisma/client';
import { Subscription, ISubscription } from '../entities/Subscription';
import { AbstractRepository } from './repository.abstract';

export interface ISubscriptionRepository {
  findAll(): Promise<ISubscription[]>;
  findById(id: string): Promise<ISubscription | null>;
  findByUserId(userId: string): Promise<ISubscription | null>;
  create(subscription: ISubscription): Promise<ISubscription>;
  update(id: string, subscription: Partial<ISubscription>): Promise<ISubscription | null>;
  delete(id: string): Promise<boolean>;
}

export class SubscriptionRepository extends AbstractRepository<Subscription> implements ISubscriptionRepository {
  private prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<ISubscription[]> {
    const subscriptions = await this.prisma.subscription.findMany();
    return subscriptions.map(s => new Subscription(s.id, s.userId, s.plan, s.startDate, s.endDate, s.status as 'active' | 'cancelled' | 'expired'));
  }

  async findById(id: string): Promise<ISubscription | null> {
    const subscription = await this.prisma.subscription.findUnique({ where: { id } });
    return subscription ? new Subscription(subscription.id, subscription.userId, subscription.plan, subscription.startDate, subscription.endDate, subscription.status as 'active' | 'cancelled' | 'expired') : null;
  }

  async findByUserId(userId: string): Promise<ISubscription | null> {
    const subscription = await this.prisma.subscription.findFirst({ where: { userId, status: 'active' } });
    return subscription ? new Subscription(subscription.id, subscription.userId, subscription.plan, subscription.startDate, subscription.endDate, subscription.status as 'active' | 'cancelled' | 'expired') : null;
  }

  async create(subscription: ISubscription): Promise<ISubscription> {
    const createdSubscription = await this.prisma.subscription.create({
      data: subscription,
    });
    return new Subscription(createdSubscription.id, createdSubscription.userId, createdSubscription.plan, createdSubscription.startDate, createdSubscription.endDate, createdSubscription.status as 'active' | 'cancelled' | 'expired');
  }

  async update(id: string, subscription: Partial<ISubscription>): Promise<ISubscription | null> {
    const updatedSubscription = await this.prisma.subscription.update({
      where: { id },
      data: subscription,
    });
    return new Subscription(updatedSubscription.id, updatedSubscription.userId, updatedSubscription.plan, updatedSubscription.startDate, updatedSubscription.endDate, updatedSubscription.status as 'active' | 'cancelled' | 'expired');
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.subscription.delete({ where: { id } });
    return true;
  }
}


