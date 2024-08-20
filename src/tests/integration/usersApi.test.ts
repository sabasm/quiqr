import request from 'supertest';
import { app } from '../../app';

describe('Users API', () => {
  it('should get all users', async () => {
    const response = await request(app)
      .get('/api/users');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});


