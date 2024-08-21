import { PrismaClient } from '@prisma/client';
import logger from '../../../services/LoggerService';

export class PaymentService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createPayment(data: any) {
    const payment = await this.prisma.payment.create({ data });
    if (payment) {
      logger.info('Payment created successfully');
    } else {
      logger.error('Failed to create payment');
    }
    return payment;
  }

  async findPaymentById(paymentId: string) {
    return this.prisma.payment.findUnique({ where: { id: paymentId } });
  }

  async updatePayment(paymentId: string, data: any) {
    return this.prisma.payment.update({ where: { id: paymentId }, data });
  }

  async findPaymentsByUserId(userId: string) {
    return this.prisma.payment.findMany({ where: { userId } });
  }
}


