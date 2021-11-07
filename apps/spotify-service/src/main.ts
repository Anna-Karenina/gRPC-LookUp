import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { SpotifyServiceModule } from './spotify-service.module';

async function bootstrap() {
  const protoPath = resolve('./spotify.proto');
  console.log(protoPath);

  process.on('unhandledRejection', (reason, promise) => {
    console.error('=== UNHANDLED REJECTION ===');
    console.error(reason.toString());
    console.error(promise);
  });

  process.on('uncaughtException', (error) => {
    console.error('=== UNHANDLED EXCEPTION ===');
    console.error(error.toString());
    console.error(error.stack);
  });

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SpotifyServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        // url: 'localhost:5500',
        package: 'spotify',
        protoPath,
      },
    },
  );
  app.listen();
}
bootstrap().catch((e) => {
  console.error('Failed to start server:');
  console.error(e);
  console.error(e.toString());
});
