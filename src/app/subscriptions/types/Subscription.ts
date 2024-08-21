export interface Subscription {
  id: string;
  userId: string;
  plan: string;
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
}


