import { Controller, Get } from '@nestjs/common';
import { NormativasServiceService } from './normativas-service.service';

@Controller()
export class NormativasServiceController {
  constructor(private readonly normativasServiceService: NormativasServiceService) {}

  @Get()
  getHello(): string {
    return this.normativasServiceService.getHello();
  }
}
