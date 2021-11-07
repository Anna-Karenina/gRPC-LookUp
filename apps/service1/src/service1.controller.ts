import { Controller } from '@nestjs/common';
import { service1Service } from './service1.service';
import { GrpcMethod } from '@nestjs/microservices';

export interface INumberArray {
  data: number[];
}

export interface ISumOfNumbersArray {
  sum: number;
}
@Controller()
export class service1Controller {
  constructor(private readonly service1Service: service1Service) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumbersArray {
    console.log(numberArray.data.toString());
    return { sum: this.service1Service.accumulate(numberArray.data) };
  }
}
