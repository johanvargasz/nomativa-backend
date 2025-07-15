import { Module } from '@nestjs/common';
import { NormativeServiceController } from './normative-service.controller';
import { NormativeServiceService } from './normative-service.service';

@Module({
  imports: [],
  controllers: [NormativeServiceController],
  providers: [NormativeServiceService],
})
export class NormativeServiceModule {}
