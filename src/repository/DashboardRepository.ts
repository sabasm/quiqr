export class DashboardRepository extends AbstractRepository<Dashboard> implements IDashboardRepository {
  async findByUserId(userId: string): Promise<Dashboard | null> {
    // Implement the method
  }

  async updateMetrics(userId: string, metrics: DashboardMetrics): Promise<Dashboard | null> {
    // Implement the method
  }
}


