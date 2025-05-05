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
    return await Transaction.create(data);
  }
}
