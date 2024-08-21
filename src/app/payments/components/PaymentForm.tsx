
import React from 'react';
import { useForm } from 'react-hook-form';
import { CreatePaymentDto } from '../dto/CreatePaymentDto';
import { PaymentService } from '../services/PaymentService';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';

export const PaymentForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreatePaymentDto>();
  const paymentService = new PaymentService();

  const onSubmit = async (data: CreatePaymentDto) => {
    try {
      await paymentService.createPayment(data);
    } catch (error) {
      console.error('Failed to create payment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Amount"
        type="number"
        {...register('amount', { required: 'Amount is required', min: 0 })}
        errorMessage={errors.amount?.message}
      />
      <Input
        label="Currency"
        {...register('currency', { required: 'Currency is required' })}
        errorMessage={errors.currency?.message}
      />
      <Button type="submit">Make Payment</Button>
    </form>
  );
};


