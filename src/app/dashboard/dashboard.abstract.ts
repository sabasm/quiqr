export abstract class AbstractDashboard {
  abstract getUserDashboard(userId: string): Promise<Dashboard>;
  abstract updateMetrics(userId: string, metrics: DashboardMetrics): Promise<Dashboard>;
}


