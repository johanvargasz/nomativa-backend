import { Controller, Get } from '@nestjs/common';
import { NormativeServiceService } from './normative-service.service';

@Controller()
export class NormativeServiceController {
  constructor(private readonly normativeServiceService: NormativeServiceService) {}

  @Get()
  getHello(): string {
    return this.normativeServiceService.getHello();
  }
}
