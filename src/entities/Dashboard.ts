import { Entity } from './entity.abstract';
import { DashboardMetrics } from '../types/Dashboard';

export class Dashboard extends Entity {
  userId: string;
  metrics: DashboardMetrics;

  constructor(id: string, userId: string, metrics: DashboardMetrics) {
    super(id);
    this.userId = userId;
    this.metrics = metrics;
  }
}


