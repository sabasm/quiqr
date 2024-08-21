export interface UpdateSubscriptionDto {
  plan?: string;
  status?: 'active' | 'cancelled' | 'expired';
  endDate?: Date;
}


