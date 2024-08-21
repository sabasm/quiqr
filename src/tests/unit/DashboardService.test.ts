import { DashboardService } from '../../services/DashboardService';

describe('DashboardService', () => {
  const dashboardService = new DashboardService();

  it('should retrieve the dashboard', async () => {
    const userId = 'user123';
    const dashboard = await dashboardService.getUserDashboard(userId);
    expect(dashboard).toBeDefined();
  });
});


