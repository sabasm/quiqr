import { DashboardMetrics } from '../types';

export interface CreateDashboardDto {
  userId: string;
  metrics: DashboardMetrics;
}


