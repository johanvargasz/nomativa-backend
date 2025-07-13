import { Module } from '@nestjs/common';
import { NormativasServiceController } from './normativas-service.controller';
import { NormativasServiceService } from './normativas-service.service';

@Module({
  imports: [],
  controllers: [NormativasServiceController],
  providers: [NormativasServiceService],
})
export class NormativasServiceModule {}
