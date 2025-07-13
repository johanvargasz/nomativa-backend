import { Injectable } from '@nestjs/common';

@Injectable()
export class FormServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
