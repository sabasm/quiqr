import { useState, useEffect } from 'react';
import { Subscription } from '../types';
import { SubscriptionService } from '../services/SubscriptionService';

export const useSubscription = (userId: string) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const subscriptionService = new SubscriptionService();
        const data = await subscriptionService.getActiveSubscriptionByUserId(userId);
        setSubscription(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [userId]);

  return { subscription, loading, error };
};


