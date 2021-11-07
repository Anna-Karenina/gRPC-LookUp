import { Module } from '@nestjs/common';
import { service1Controller } from './service1.controller';
import { service1Service } from './service1.service';

@Module({
  imports: [],
  controllers: [service1Controller],
  providers: [service1Service],
})
export class service1Module {}
