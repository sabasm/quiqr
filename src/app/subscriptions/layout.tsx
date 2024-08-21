import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscriptions',
  description: 'Manage your subscriptions in the Quiqr application',
};

export default function SubscriptionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="subscriptions-layout">
      {children}
    </div>
  );
}


