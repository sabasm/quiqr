import request from 'supertest';
import { app } from '../../app';

describe('Subscriptions API', () => {
  it('should get active subscription for a user', async () => {
    const userId = '789';
    const response = await request(app)
      .get(`/api/subscriptions/active/${userId}`);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('plan');
    expect(response.body.status).toBe('active');
  });
});


