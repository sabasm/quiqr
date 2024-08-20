import React from 'react';
import { usePayment } from '../hooks/usePayment';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';

export const PaymentForm: React.FC = () => {
  const { processPayment, loading, error } = usePayment();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const amount = Number(formData.get('amount'));
    const currency = formData.get('currency') as string;
    await processPayment(amount, currency);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Amount" name="amount" type="number" required />
      <Input label="Currency" name="currency" type="text" required />
      <Button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};


