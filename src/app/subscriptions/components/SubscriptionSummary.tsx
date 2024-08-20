import React from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { useAuth } from '../../../hooks/useAuth';

export const SubscriptionSummary: React.FC = () => {
  const { user } = useAuth();
  const { subscription, loading, error } = useSubscription(user?.id || '');

  if (loading) return <p>Loading subscription...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!subscription) return <p>No active subscription found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold">{subscription.plan}</h2>
      <p>Status: {subscription.status}</p>
      <p>Expires: {new Date(subscription.endDate).toLocaleDateString()}</p>
    </div>
  );
};


