import { DashboardService } from '../../app/dashboard/services/DashboardService';

describe('DashboardService', () => {
  it('should get dashboard data for a user', async () => {
    const userId = '101112';
    const dashboard = await DashboardService.getDashboard(userId);
    expect(dashboard).toBeDefined();
    expect(dashboard.metrics).toBeDefined();
  });
});


