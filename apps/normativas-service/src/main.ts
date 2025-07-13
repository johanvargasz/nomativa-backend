import { NestFactory } from '@nestjs/core';
import { NormativasServiceModule } from './normativas-service.module';

async function bootstrap() {
  const app = await NestFactory.create(NormativasServiceModule);
  await app.listen(process.env.port ?? 3004);
}
bootstrap();
