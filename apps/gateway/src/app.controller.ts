import {
  Body,
  Controller,
  Get,
  OnModuleInit,
  Post,
  Query,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>(
      'SpotifyService_Search',
    );
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    return this.grpcService.accumulate({ data });
  }

  @Get()
  async searchTracks(@Query('q') q: string) {
    console.log(q);

    return this.grpcService.Search({ query: q });
  }
}
