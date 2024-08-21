import request from 'supertest';
import { app } from '../../server';

describe('Dashboard API', () => {
  it('should get dashboard data for a user', async () => {
    const userId = '123';
    const response = await request(app).get(`/api/dashboard/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('metrics');
  });
});


