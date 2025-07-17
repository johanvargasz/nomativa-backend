import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FormServiceModule } from './form-service.module';

async function bootstrap() {
  const app = await NestFactory.create(FormServiceModule);

  const config = new DocumentBuilder()
    .setTitle('Form Service')
    .setDescription('The Form Service API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.port ?? 3003);
}
bootstrap();
