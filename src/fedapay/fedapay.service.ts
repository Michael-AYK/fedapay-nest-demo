import { Injectable } from '@nestjs/common';
import { Customer, Transaction } from 'fedapay';
import { configureFedaPay } from '../fedapay.config';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class FedapayService {
  constructor() {
    configureFedaPay();
  }

  async createCustomer(data: CreateCustomerDto) {
    return await Customer.create(data);
  }

  async createTransaction(data: CreateTransactionDto) {
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
