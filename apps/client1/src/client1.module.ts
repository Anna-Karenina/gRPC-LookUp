import { Module } from '@nestjs/common';
import { Client1Controller } from './client1.controller';
import { Client1Service } from './client1.service';

@Module({
  imports: [],
  controllers: [Client1Controller],
  providers: [Client1Service],
})
export class Client1Module {}
