import { PaymentService } from '../../app/payments/services/PaymentService';

describe('PaymentService', () => {
  it('should process a payment', async () => {
    const paymentData = { amount: 100, currency: 'USD' };
    const payment = await PaymentService.processPayment(paymentData);
    expect(payment).toBeDefined();
    expect(payment.status).toBe('completed');
  });
});


