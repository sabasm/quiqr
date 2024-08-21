import { z } from 'zod';

export const subscriptionSchema = z.object({
  plan: z.string().min(1, 'Plan is required'),
  status: z.enum(['active', 'cancelled', 'expired']),
  startDate: z.date(),
  endDate: z.date(),
});

export const validateSubscription = (data: unknown) => subscriptionSchema.parse(data);


