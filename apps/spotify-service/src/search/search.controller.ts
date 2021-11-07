import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SearchService } from './search.service';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @GrpcMethod('SpotifyService_Search', 'Search')
  Search(a: any, metadata: any): any {
    console.log(a);

    // return { sum: this.service1Service.accumulate(numberArray.data) };
  }
}
