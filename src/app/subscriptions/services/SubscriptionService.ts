import { Subscription, ISubscription } from '../../../entities/Subscription';
import { SubscriptionRepository } from '../../../repository/SubscriptionRepository';
import { CreateSubscriptionDto, UpdateSubscriptionDto } from '../dto';
import { LoggerService } from '../../../services/LoggerService';

export interface ISubscriptionService {
  createSubscription(createSubscriptionDto: CreateSubscriptionDto): Promise<ISubscription>;
  getSubscriptionById(id: string): Promise<ISubscription | null>;
  getActiveSubscriptionByUserId(userId: string): Promise<ISubscription | null>;
  updateSubscription(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<ISubscription | null>;
  cancelSubscription(id: string): Promise<ISubscription | null>;
  getAllSubscriptions(): Promise<ISubscription[]>;
}

export class SubscriptionService implements ISubscriptionService {
  private subscriptionRepository: SubscriptionRepository;
  private logger: LoggerService;

  constructor() {
    this.subscriptionRepository = new SubscriptionRepository();
    this.logger = new LoggerService();
  }

  async createSubscription(createSubscriptionDto: CreateSubscriptionDto): Promise<ISubscription> {
    try {
      const subscription = new Subscription(
        Date.now().toString(),
        createSubscriptionDto.userId,
        createSubscriptionDto.plan,
        new Date(),
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        'active'
      );
      const createdSubscription = await this.subscriptionRepository.create(subscription);
      this.logger.info(`Subscription created for user: ${createSubscriptionDto.userId}`);
      return createdSubscription;
    } catch (error) {
      this.logger.error(`Error creating subscription: ${error}`);
      throw error;
    }
  }

  async getSubscriptionById(id: string): Promise<ISubscription | null> {
    try {
      return await this.subscriptionRepository.findById(id);
    } catch (error) {
      this.logger.error(`Error fetching subscription: ${error}`);
      throw error;
    }
  }

  async getActiveSubscriptionByUserId(userId: string): Promise<ISubscription | null> {
    try {
      return await this.subscriptionRepository.findByUserId(userId);
    } catch (error) {
      this.logger.error(`Error fetching active subscription for user: ${error}`);
      throw error;
    }
  }

  async updateSubscription(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<ISubscription | null> {
    try {
      const updatedSubscription = await this.subscriptionRepository.update(id, updateSubscriptionDto);
      if (updatedSubscription) {
        this.logger.info(`Subscription updated: ${id}`);
      }
      return updatedSubscription;
    } catch (error) {
      this.logger.error(`Error updating subscription: ${error}`);
      throw error;
    }
  }

  async cancelSubscription(id: string): Promise<ISubscription | null> {
    try {
      const cancelledSubscription = await this.subscriptionRepository.update(id, { status: 'cancelled' });
      if (cancelledSubscription) {
        this.logger.info(`Subscription cancelled: ${id}`);
      }
      return cancelledSubscription;
    } catch (error) {
      this.logger.error(`Error cancelling subscription: ${error}`);
      throw error;
    }
  }

  async getAllSubscriptions(): Promise<ISubscription[]> {
    try {
      return await this.subscriptionRepository.findAll();
    } catch (error) {
      this.logger.error(`Error fetching all subscriptions: ${error}`);
      throw error;

