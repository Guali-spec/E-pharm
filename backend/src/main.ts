import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // supprime les champs inconnus
      forbidNonWhitelisted: true, // renvoie une erreur si champs inconnus
      transform: true,            // transforme types (string -> number si possible)
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
