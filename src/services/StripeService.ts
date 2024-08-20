import Stripe from 'stripe';
import { LoggerService } from './LoggerService';

export interface IStripeService {
  createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent>;
  createCustomer(email: string): Promise<Stripe.Customer>;
  createSubscription(customerId: string, priceId: string): Promise<Stripe.Subscription>;
}

export class StripeService implements IStripeService {
  private stripe: Stripe;
  private logger: LoggerService;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2020-08-27' });
    this.logger = new LoggerService();
  }

  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({ amount, currency });
      this.logger.info(`Payment intent created: ${paymentIntent.id}`);
      return paymentIntent;
    } catch (error) {
      this.logger.error(`Error creating payment intent: ${error}`);
      throw error;
    }
  }

  async createCustomer(email: string): Promise<Stripe.Customer> {
    try {
      const customer = await this.stripe.customers.create({ email });
      this.logger.info(`Stripe customer created: ${customer.id}`);
      return customer;
    } catch (error) {
      this.logger.error(`Error creating Stripe customer: ${error}`);
      throw error;
    }
  }

  async createSubscription(customerId: string, priceId: string): Promise<Stripe.Subscription> {
    try {
      const subscription = await this.stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });
      this.logger.info(`Stripe subscription created: ${subscription.id}`);
      return subscription;
    } catch (error) {
      this.logger.error(`Error creating Stripe subscription: ${error}`);
      throw error;
    }
  }
}


