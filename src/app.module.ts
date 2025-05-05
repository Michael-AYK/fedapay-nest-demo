import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FedapayModule } from './fedapay/fedapay.module';

@Module({
  imports: [FedapayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
