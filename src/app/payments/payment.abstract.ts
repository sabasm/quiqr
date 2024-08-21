import { Payment } from './types';

export abstract class AbstractPayment implements Payment {
  abstract id: string;
  abstract userId: string;
  abstract amount: number;
  abstract currency: string;
  abstract status: 'pending' | 'completed' | 'failed';
  abstract createdAt: Date;

  abstract toJSON(): Record<string, any>;
}


