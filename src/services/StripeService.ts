import Stripe from 'stripe';
import { stripeConfig } from '../config/stripeConfig';

export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(stripeConfig.secretKey, {
      apiVersion: '2024-06-20',
    });
  }

  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
    });
  }

  async retrievePaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.retrieve(paymentIntentId);
  }

  async createCustomer(customerData: Stripe.CustomerCreateParams): Promise<Stripe.Customer> {
    return this.stripe.customers.create(customerData);
  }

  async createRefund(paymentIntentId: string, amount?: number): Promise<Stripe.Refund> {
    return this.stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount,
    });
  }
}


