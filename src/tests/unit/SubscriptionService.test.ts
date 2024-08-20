import { SubscriptionService } from '../../app/subscriptions/services/SubscriptionService';

describe('SubscriptionService', () => {
  it('should get active subscription for a user', async () => {
    const userId = '789';
    const subscription = await SubscriptionService.getActiveSubscription(userId);
    expect(subscription).toBeDefined();
    expect(subscription.status).toBe('active');
  });

  it('should create a new subscription', async () => {
    const subscriptionData = { userId: '789', plan: 'premium' };
    const newSubscription = await SubscriptionService.createSubscription(subscriptionData);
    expect(newSubscription).toBeDefined();
    expect(newSubscription.plan).toBe('premium');
  });
});


