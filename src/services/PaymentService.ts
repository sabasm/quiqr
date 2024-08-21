import { PrismaClient } from '@prisma/client';
import { Payment } from '../entities/Payment';

export class PaymentService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async processPayment(data: Partial<Payment>): Promise<Payment> {
    return this.prisma.payment.create({
      data: {
        ...data,
        status: 'completed',
      },
    });
  }
}


