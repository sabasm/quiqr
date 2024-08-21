import request from 'supertest';
import { app } from '../../server';

describe('Subscriptions API', () => {
  it('should get active subscription for a user', async () => {
    const userId = '123';
    const response = await request(app).get(`/api/subscriptions/active/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('plan');
    expect(response.body.status).toBe('active');
  });
});


