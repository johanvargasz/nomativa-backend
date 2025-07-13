import { NestFactory } from '@nestjs/core';
import { FormServiceModule } from './form-service.module';

async function bootstrap() {
  const app = await NestFactory.create(FormServiceModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
