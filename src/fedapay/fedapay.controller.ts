import { Controller, Post, Body } from '@nestjs/common';
import { FedapayService } from './fedapay.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('fedapay')
export class FedapayController {
  constructor(private readonly fedapayService: FedapayService) {}

  @Post('customer')
  async createCustomer(@Body() body: CreateCustomerDto) {
    return this.fedapayService.createCustomer(body);
  }

  @Post('transaction')
  async createTransaction(@Body() body: CreateTransactionDto) {
    return this.fedapayService.createTransaction(body);
  }
}
