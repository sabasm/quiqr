import { usePaymentContext } from '../context/PaymentContext';

export const usePayment = () => {
  const context = usePaymentContext();
  return context;
};


