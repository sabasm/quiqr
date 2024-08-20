import { Entity } from './entity.abstract';

export class Dashboard extends Entity {
  userId: string;
  metrics: {
    totalUsers: number;
    activeSubscriptions: number;
    revenue: number;
  };

  constructor(id: string, userId: string, metrics: { totalUsers: number; activeSubscriptions: number; revenue: number }) {
    super(id);
    this.userId = userId;
    this.metrics = metrics;
  }
}


