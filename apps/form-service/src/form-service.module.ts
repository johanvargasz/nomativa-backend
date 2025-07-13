import { Module } from '@nestjs/common';
import { FormServiceController } from './form-service.controller';
import { FormServiceService } from './form-service.service';

@Module({
  imports: [],
  controllers: [FormServiceController],
  providers: [FormServiceService],
})
export class FormServiceModule {}
