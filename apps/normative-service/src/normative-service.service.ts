import { Injectable } from '@nestjs/common';

@Injectable()
export class NormativeServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
