import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SearchService } from './search.service';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @GrpcMethod('SpotifyService_Search', 'search')
  search({ query }: any, metadata: any): any {
    const list = this.searchService.searchByQuery(query);
    return { aut: [false, true] };
  }
}
