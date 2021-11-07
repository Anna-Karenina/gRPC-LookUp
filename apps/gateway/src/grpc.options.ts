import { ClientOptions, Transport } from '@nestjs/microservices';
import { resolve } from 'path';

// const appProtoPath = resolve('app.proto');
const spotiftProtoPath = resolve('spotify.proto');

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    // package: ['app', 'spotify'],
    // protoPath: [appProtoPath, spotiftProtoPath],
    package: 'spotify',
    protoPath: spotiftProtoPath,
  },
};
