// main.ts
// cambio del main 

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // Asegúrate de que está escuchando en el puerto 3000
}
bootstrap();
