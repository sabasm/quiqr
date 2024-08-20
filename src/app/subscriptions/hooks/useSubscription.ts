import { useState, useEffect } from 'react';
import { SubscriptionService } from '../services/SubscriptionService';
import { Subscription } from '../types/Subscription';

export const useSubscription = (userId: string) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const data = await SubscriptionService.getActiveSubscription(userId);
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


