import { LoggerService } from '../../../services/LoggerService';

export class DashboardService extends AbstractService implements IDashboardService {
  constructor(
    private dashboardRepository: IDashboardRepository,
    private logger: LoggerService
  ) {
    super();
  }

  async getUserDashboard(userId: string): Promise<Dashboard> {
    try {
      const dashboard = await this.dashboardRepository.findByUserId(userId);
      if (!dashboard) {
        throw new Error('Dashboard not found');
      }
      return dashboard;
    } catch (error) {
      this.logger.error('Error fetching user dashboard', { userId, error });
      throw error;
    }
  }
}


