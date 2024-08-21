import { PrismaClient } from '@prisma/client';
import { Dashboard } from '../entities/Dashboard';

export class DashboardService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUserDashboard(userId: string): Promise<Dashboard | null> {
    return this.prisma.dashboard.findUnique({
      where: { userId },
    });
  }

  async updateDashboard(userId: string, data: Partial<Dashboard>): Promise<Dashboard> {
    return this.prisma.dashboard.update({
      where: { userId },
      data,
    });
  }
}


