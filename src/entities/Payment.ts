import { Entity } from './entity.abstract';

export class Payment extends Entity {
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;

  constructor(id: string, userId: string, amount: number, currency: string, status: 'pending' | 'completed' | 'failed') {
    super(id);
    this.userId = userId;
    this.amount = amount;
    this.currency = currency;
    this.status = status;
    this.createdAt = new Date();
  }
}


