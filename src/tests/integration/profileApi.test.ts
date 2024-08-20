import request from 'supertest';
import { app } from '../../app';

describe('Profile API', () => {
  it('should get a user profile', async () => {
    const userId = '123';
    const response = await request(app)
      .get(`/api/profiles/${userId}`);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body.userId).toBe(userId);
  });
});


