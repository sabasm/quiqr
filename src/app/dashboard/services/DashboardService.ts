import { PrismaClient } from '@prisma/client';
import { Dashboard } from '../types/Dashboard';
import logger from '../../../services/LoggerService';

export class DashboardService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDashboard(userId: string): Promise<Dashboard | null> {
    const dashboard = await this.prisma.dashboard.findUnique({
      where: { userId },
    });
    if (!dashboard) {
      logger.error(`No dashboard found for user ${userId}`);
    }
    return dashboard;
  }

  async updateMetrics(userId: string, metrics: Partial<Dashboard['metrics']>): Promise<Dashboard | null> {
    const dashboard = await this.prisma.dashboard.update({
      where: { userId },
      data: { metrics },
    });
    if (!dashboard) {
      logger.error(`Failed to update metrics for user ${userId}`);
    }
    return dashboard;
  }
}


