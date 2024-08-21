import { z } from 'zod';

export const paymentSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().length(3, 'Currency must be a 3-letter code'),
});

export const validatePayment = (data: unknown) => paymentSchema.parse(data);


