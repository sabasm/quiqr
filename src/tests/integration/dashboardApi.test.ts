import request from 'supertest';
import { app } from '../../app';

describe('Dashboard API', () => {
  it('should get dashboard data for a user', async () => {
    const userId = '101112';
    const response = await request(app)
      .get(`/api/dashboard/${userId}`);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('metrics');
  });
});


