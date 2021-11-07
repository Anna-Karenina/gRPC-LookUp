import { NestFactory } from '@nestjs/core';
import { service1Module } from './service1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const protoPath = join(__dirname, './../../../app.proto');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    service1Module,
    {
      transport: Transport.GRPC,
      options: {
        package: 'app',
        protoPath,
      },
    },
  );
  app.listen();
}
bootstrap();
