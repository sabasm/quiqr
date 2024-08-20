export interface Subscription {
  id: string;
  userId: string;
  plan: string;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'cancelled' | 'expired';
}


