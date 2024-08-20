import { AbstractRepository } from './repository.abstract';
import { Payment } from '../entities/Payment';

export class PaymentRepository extends AbstractRepository<Payment> {
  protected entity = Payment;

  async findByUserId(userId: string): Promise<Payment[]> {
    // Implementation for finding payments by user ID
    throw new Error('Method not implemented');
  }
}


