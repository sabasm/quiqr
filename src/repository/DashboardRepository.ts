import { AbstractRepository } from './repository.abstract';
import { Dashboard } from '../entities/Dashboard';

export class DashboardRepository extends AbstractRepository<Dashboard> {
  protected entity = Dashboard;

  async findByUserId(userId: string): Promise<Dashboard | null> {
    // Implementation for finding a dashboard by user ID
    throw new Error('Method not implemented');
  }
}


