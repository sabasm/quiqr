import { useState } from 'react';
import { PaymentService } from '../services/PaymentService';
import { CreatePaymentDto } from '../dto/CreatePaymentDto';
import { Payment } from '../types';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPayment = async (paymentData: CreatePaymentDto): Promise<Payment | null> => {
    setLoading(true);
    setError(null);
    try {
      const paymentService = new PaymentService();
      const result = await paymentService.createPayment(paymentData);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
      return null;
    }
  };

  return { createPayment, loading, error };
};


