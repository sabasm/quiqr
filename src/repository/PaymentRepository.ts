import { PrismaClient } from '@prisma/client';
import { Payment } from '../entities/Payment';

export class PaymentRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<Payment[]> {
    return this.prisma.payment.findMany();
  }

  async findById(id: string): Promise<Payment | null> {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  async findByUserId(userId: string): Promise<Payment | null> {
    return this.prisma.payment.findUnique({ where: { userId } });
  }

  async create(data: Partial<Payment>): Promise<Payment> {
    return this.prisma.payment.create({ data });
  }

  async update(id: string, data: Partial<Payment>): Promise<Payment | null> {
    return this.prisma.payment.update({ where: { id }, data });
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.payment.delete({ where: { id } });
    return true;
  }
}


