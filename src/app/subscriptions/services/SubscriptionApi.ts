import { ApiService } from '../../../services/ApiService';

export class SubscriptionApi extends ApiService {
  createSubscription(data: any) {
    return this.post('/subscriptions', data);
  }

  updateSubscription(id: string, data: any) {
    return this.put(`/subscriptions/${id}`, data);
  }
}


