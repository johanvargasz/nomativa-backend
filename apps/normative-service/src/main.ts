import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NormativeServiceModule } from './normative-service.module';

async function bootstrap() {
  const app = await NestFactory.create(NormativeServiceModule);

  const config = new DocumentBuilder()
    .setTitle('Normative Service')
    .setDescription('The Normative Service API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.port ?? 3004);
}
bootstrap();
