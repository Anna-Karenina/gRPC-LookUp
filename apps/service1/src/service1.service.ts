import { Injectable } from '@nestjs/common';

@Injectable()
export class service1Service {
  accumulate(data: number[]): number {
    return (data || []).reduce((acc, cur) => acc + cur, 0);
  }
}
