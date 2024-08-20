import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { LoggerService } from '../../services/LoggerService';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2020-08-27' });
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const logger = new LoggerService();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
    } catch (err) {
      const error = err as Error;
      logger.error(`Webhook Error: ${error.message}`);
      res.status(400).send(`Webhook Error: ${error.message}`);
      return;
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        logger.info(`PaymentIntent was successful: ${paymentIntent.id}`);
        // Handle successful payment intent
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object as Stripe.PaymentMethod;
        logger.info(`PaymentMethod was attached: ${paymentMethod.id}`);
        // Handle payment method attached
        break;
      default:

