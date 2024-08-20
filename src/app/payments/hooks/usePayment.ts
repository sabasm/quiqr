import { useState } from 'react';
import { PaymentService } from '../services/PaymentService';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (amount: number, currency: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await PaymentService.processPayment(amount, currency);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return { processPayment, loading, error };
};


