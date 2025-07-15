import { Test, TestingModule } from '@nestjs/testing';
import { NormativeServiceController } from './normative-service.controller';
import { NormativeServiceService } from './normative-service.service';

describe('NormativeServiceController', () => {
  let normativeServiceController: NormativeServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NormativeServiceController],
      providers: [NormativeServiceService],
    }).compile();

    normativeServiceController = app.get<NormativeServiceController>(NormativeServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(normativeServiceController.getHello()).toBe('Hello World!');
    });
  });
});
