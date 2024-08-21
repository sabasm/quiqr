import { ApiService } from '../../../services/ApiService';

export class DashboardApi extends ApiService {
  getDashboardData() {
    return this.get('/dashboard');
  }

  updateDashboardData(data: any) {
    return this.put('/dashboard', data);
  }
}


