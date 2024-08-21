import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payments',
  description: 'Manage your payments in the Quiqr application',
};

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="payments-layout">
      {children}
    </div>
  );
}


