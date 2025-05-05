import { Module } from '@nestjs/common';
import { FedapayController } from './fedapay.controller';
import { FedapayService } from './fedapay.service';

@Module({
  controllers: [FedapayController],
  providers: [FedapayService]
})
export class FedapayModule {}
