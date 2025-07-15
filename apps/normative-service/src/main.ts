import { NestFactory } from '@nestjs/core';
import { NormativeServiceModule } from './normative-service.module';

async function bootstrap() {
  const app = await NestFactory.create(NormativeServiceModule);
  await app.listen(process.env.port ?? 3004);
}
bootstrap();
