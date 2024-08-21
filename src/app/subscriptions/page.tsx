import React from 'react';
import { SubscriptionSummary } from './components/SubscriptionSummary';
import { SubscriptionForm } from './components/SubscriptionForm';
import { Main } from '../../shared/components/Main';
import { useAuth } from '../../hooks/useAuth';

export default function SubscriptionsPage() {
  const { user } = useAuth();

  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Your Subscription</h1>
      <SubscriptionSummary userId={user?.id || ''} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Create New Subscription</h2>
      <SubscriptionForm />
    </Main>
  );
}


