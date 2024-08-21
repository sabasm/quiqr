import { PrismaClient } from '@prisma/client';
import { Dashboard } from '../entities/Dashboard';

export class DashboardRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByUserId(userId: string): Promise<Dashboard | null> {
    return this.prisma.dashboard.findUnique({ where: { userId } });
  }

  async updateMetrics(userId: string, metrics: Partial<Dashboard['metrics']>): Promise<Dashboard> {
    return this.prisma.dashboard.update({
      where: { userId },
      data: { metrics },
    });
  }
}


