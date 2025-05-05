import { Test, TestingModule } from '@nestjs/testing';
import { FedapayService } from './fedapay.service';

describe('FedapayService', () => {
  let service: FedapayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FedapayService],
    }).compile();

    service = module.get<FedapayService>(FedapayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
