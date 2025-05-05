import { Test, TestingModule } from '@nestjs/testing';
import { FedapayController } from './fedapay.controller';

describe('FedapayController', () => {
  let controller: FedapayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FedapayController],
    }).compile();

    controller = module.get<FedapayController>(FedapayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
