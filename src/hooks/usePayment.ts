import { useContext } from 'react';
import { PaymentContext } from '../context/PaymentContext';

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};


