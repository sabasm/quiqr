import React from 'react';
import { SubscriptionSummary } from './components/SubscriptionSummary';
import { Main } from '../../shared/components/Main';

export default function SubscriptionsPage() {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Your Subscription</h1>
      <SubscriptionSummary />
    </Main>
  );
}


