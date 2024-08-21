import { SubscriptionService } from "@/app/subscriptions";

const subscriptionService = new SubscriptionService();

describe('SubscriptionService', () => {
  it('should retrieve the active subscription', async () => {
    const userId = 'user123';
    const subscription = await subscriptionService.findSubscriptionByUserId(userId);
    expect(subscription).toBeDefined();
  });

  it('should create a subscription', async () => {
    const subscriptionData = {}; // mock subscription data
    const newSubscription = await subscriptionService.createSubscription(subscriptionData);
    expect(newSubscription).toBeDefined();
  });
});


