import { Payment } from '../types';
import { PaymentRepository } from '../../../repository/PaymentRepository';
import { CreatePaymentDto, UpdatePaymentDto } from '../dto';
import { LoggerService } from '../../../services/LoggerService';
import { StripeService } from './StripeService';

export class PaymentService {
  private paymentRepository: PaymentRepository;
  private logger: LoggerService;
  private stripeService: StripeService;

  constructor() {
    this.paymentRepository = new PaymentRepository();
    this.logger = new LoggerService();
    this.stripeService = new StripeService();
  }

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    try {
      const stripePaymentIntent = await this.stripeService.createPaymentIntent(
        createPaymentDto.amount,
        createPaymentDto.currency
      );

      const payment = await this.paymentRepository.create({
        ...createPaymentDto,
        id: stripePaymentIntent.id,
        status: 'pending',
        createdAt: new Date(),
      });

      this.logger.info(`Payment created for user: ${createPaymentDto.userId}`);
      return payment;
    } catch (error) {
      this.logger.error(`Error creating payment: ${error}`);
      throw error;
    }
  }

  async getPaymentById(id: string): Promise<Payment | null> {
    try {
      return await this.paymentRepository.findById(id);
    } catch (error) {
      this.logger.error(`Error fetching payment: ${error}`);
      throw error;
    }
  }

  async updatePayment(id: string, updatePaymentDto: UpdatePaymentDto): Promise<Payment | null> {
    try {
      const updatedPayment = await this.paymentRepository.update(id, updatePaymentDto);
      if (updatedPayment) {
        this.logger.info(`Payment updated: ${id}`);
      }
      return updatedPayment;
    } catch (error) {
      this.logger.error(`Error updating payment: ${error}`);
      throw error;
    }
  }

  async getPaymentsByUserId(userId: string): Promise<Payment[]> {
    try {
      return await this.paymentRepository.findByUserId(userId);
    } catch (error) {
      this.logger.error(`Error fetching payments for user: ${error}`);
      throw error;
    }
  }
}


