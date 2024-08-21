import React from 'react';
import { useForm } from 'react-hook-form';
import { CreateSubscriptionDto } from '../dto/CreateSubscriptionDto';
import { SubscriptionService } from '../services/SubscriptionService';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';

export const SubscriptionForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateSubscriptionDto>();
  const subscriptionService = new SubscriptionService();

  const onSubmit = async (data: CreateSubscriptionDto) => {
    try {
      await subscriptionService.createSubscription(data);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error('Failed to create subscription:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Plan"
        {...register('plan', { required: 'Plan is required' })}
        error={errors.plan?.message}
      />
      <Button type="submit">Create Subscription</Button>
    </form>
  );
};


