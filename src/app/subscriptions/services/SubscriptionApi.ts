import { ApiService } from '../../../services/ApiService';
import { Subscription } from '../types';
import { CreateSubscriptionDto, UpdateSubscriptionDto } from '../dto';

export class SubscriptionApi {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getSubscription(userId: string): Promise<Subscription> {
    return this.apiService.get<Subscription>(`/subscriptions/${userId}`);
  }

  async createSubscription(subscriptionData: CreateSubscriptionDto): Promise<Subscription> {
    return this.apiService.post<Subscription>('/subscriptions', subscriptionData);
  }

  async updateSubscription(id: string, subscriptionData: UpdateSubscriptionDto): Promise<Subscription> {
    return this.apiService.put<Subscription>(`/subscriptions/${id}`, subscriptionData);
  }

  async cancelSubscription(id: string): Promise<Subscription> {
    return this.apiService.put<Subscription>(`/subscriptions/${id}/cancel`, {});
  }
}


