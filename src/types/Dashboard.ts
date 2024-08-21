export interface DashboardMetrics {
  totalUsers: number;
  activeSubscriptions: number;
  revenue: number;
}

export interface Dashboard {
  userId: string;
  metrics: DashboardMetrics;
}


