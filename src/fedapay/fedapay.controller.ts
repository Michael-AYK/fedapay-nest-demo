import { Controller, Post, Body } from '@nestjs/common';
import { FedapayService } from './fedapay.service';

@Controller('fedapay')
export class FedapayController {
  constructor(private readonly fedapayService: FedapayService) {}

  @Post('customer')
  async createCustomer(@Body() body: any) {
    return this.fedapayService.createCustomer(body);
  }

  @Post('transaction')
  async createTransaction(@Body() body: any) {
    return this.fedapayService.createTransaction(body);
  }
}
