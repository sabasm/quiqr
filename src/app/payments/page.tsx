import React from 'react';
import { PaymentForm } from './components/PaymentForm';
import { Main } from '../../shared/components/Main';

export default function PaymentsPage() {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Payments</h1>
      <PaymentForm />
    </Main>
  );

