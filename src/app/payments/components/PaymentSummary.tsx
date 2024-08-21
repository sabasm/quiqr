import React from 'react';
import { Payment } from '../types';

interface PaymentSummaryProps {
  payment: Payment;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ payment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Payment Summary</h3>
      <p>Amount: {payment.amount} {payment.currency}</p>
      <p>Status: {payment.status}</p>
      <p>Date: {payment.createdAt.toLocaleDateString()}</p>
    </div>
  );
};


