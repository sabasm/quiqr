export class DashboardApi {
  constructor(private apiService: ApiService) {}

  async getUserDashboard(userId: string): Promise<Dashboard> {
    return this.apiService.get<Dashboard>(`/dashboard/${userId}`);
  }

  async updateMetrics(userId: string, metrics: DashboardMetrics): Promise<Dashboard> {
    return this.apiService.put<Dashboard>(`/dashboard/${userId}/metrics`, metrics);
  }
}


