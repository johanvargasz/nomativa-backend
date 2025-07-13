import { Test, TestingModule } from '@nestjs/testing';
import { FormServiceController } from './form-service.controller';
import { FormServiceService } from './form-service.service';

describe('FormServiceController', () => {
  let formServiceController: FormServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FormServiceController],
      providers: [FormServiceService],
    }).compile();

    formServiceController = app.get<FormServiceController>(FormServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(formServiceController.getHello()).toBe('Hello World!');
    });
  });
});
