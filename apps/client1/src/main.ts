import { NestFactory } from '@nestjs/core';
import { Client1Module } from './client1.module';

async function bootstrap() {
  const app = await NestFactory.create(Client1Module);
  await app.listen(3000, () => console.log('3000'));
}
bootstrap();
