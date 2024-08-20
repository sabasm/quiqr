import request from 'supertest';
import { app } from '../../app'; // Assuming you have an Express app exported

describe('Payments API', () => {
  it('should create a payment', async () => {
    const response = await request(app)
      .post('/api/payments')
      .send({ amount: 100, currency: 'USD' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.amount).toBe(100);
  });
});


