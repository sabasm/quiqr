import request from 'supertest';
import { app } from '../../app';

describe('Security API', () => {
  it('should validate a token', async () => {
    const response = await request(app)
      .post('/api/security/validate-token')
      .send({ token: 'valid_token' });
    
    expect(response.status).toBe(200);
    expect(response.body.isValid).toBe(true);
  });
});


