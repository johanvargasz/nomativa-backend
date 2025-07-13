import { Test, TestingModule } from '@nestjs/testing';
import { NormativasServiceController } from './normativas-service.controller';
import { NormativasServiceService } from './normativas-service.service';

describe('NormativasServiceController', () => {
  let normativasServiceController: NormativasServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NormativasServiceController],
      providers: [NormativasServiceService],
    }).compile();

    normativasServiceController = app.get<NormativasServiceController>(NormativasServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(normativasServiceController.getHello()).toBe('Hello World!');
    });
  });
});
