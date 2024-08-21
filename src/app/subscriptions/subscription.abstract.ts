import { Subscription } from './types';

export abstract class AbstractSubscription implements Subscription {
  abstract id: string;
  abstract userId: string;
  abstract plan: string;
  abstract status: 'active' | 'cancelled' | 'expired';
  abstract startDate: Date;
  abstract endDate: Date;

  abstract toJSON(): Record<string, any>;
}


