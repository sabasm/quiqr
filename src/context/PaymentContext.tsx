import React, { createContext, useState, useContext } from 'react';
import { Payment } from '../types/Payment';

interface PaymentContextType {
  payments: Payment[];
  addPayment: (payment: Payment) => void;
  removePayment: (paymentId: string) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [payments, setPayments] = useState<Payment[]>([]);

  const addPayment = (payment: Payment) => {
    setPayments(prev => [...prev, payment]);
  };

  const removePayment = (paymentId: string) => {
    setPayments(prev => prev.filter(payment => payment.id !== paymentId));
  };

  return (
    <PaymentContext.Provider value={{ payments, addPayment, removePayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePaymentContext must be used within a PaymentProvider');
  }
  return context;
};


