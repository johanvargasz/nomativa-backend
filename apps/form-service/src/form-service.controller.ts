import { Controller, Get } from '@nestjs/common';
import { FormServiceService } from './form-service.service';

@Controller()
export class FormServiceController {
  constructor(private readonly formServiceService: FormServiceService) {}

  @Get()
  getHello(): string {
    return this.formServiceService.getHello();
  }
}
