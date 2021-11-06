import { Controller, Get } from '@nestjs/common';
import { Client1Service } from './client1.service';

@Controller()
export class Client1Controller {
  constructor(private readonly client1Service: Client1Service) {}

  @Get()
  getHello(): string {
    return this.client1Service.getHello();
  }
}
