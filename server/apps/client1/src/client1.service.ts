import { Injectable } from '@nestjs/common';

@Injectable()
export class Client1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
