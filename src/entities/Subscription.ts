import { Entity } from './entity.abstract';

export class Subscription extends Entity {
  userId: string;
  plan: string;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'cancelled' | 'expired';

  constructor(id: string, userId: string, plan: string, startDate: Date, endDate: Date, status: 'active' | 'cancelled' | 'expired') {
    super(id);
    this.userId = userId;
    this.plan = plan;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
  }
}


