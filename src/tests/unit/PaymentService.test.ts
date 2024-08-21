import { PaymentService } from '../../services/PaymentService';

const paymentService = new PaymentService();

describe('PaymentService', () => {
  it('should process payment', async () => {
    const paymentData = {}; // mock payment data
    const payment = await paymentService.processPayment(paymentData);
    expect(payment).toBeDefined();
  });
});


