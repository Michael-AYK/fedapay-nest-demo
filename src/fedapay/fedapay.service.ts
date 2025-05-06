import { Injectable } from '@nestjs/common';
import { Customer, Transaction } from 'fedapay';
import { configureFedaPay } from '../fedapay.config';

@Injectable()
export class FedapayService {
  constructor() {
    configureFedaPay();
  }

  async createCustomer(data: any) {
    return await Customer.create(data);
  }

  async createTransaction(data: any) {
    try {
      const transaction = await Transaction.create(data);
      const token = await transaction.generateToken();
      return {
        success: true,
        transaction: transaction,
        token 
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
