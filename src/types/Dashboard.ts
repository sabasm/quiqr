export interface DashboardData {
  userId: string;
  metrics: {
    totalUsers: number;
    activeSubscriptions: number;
    revenue: number;
  };
}


