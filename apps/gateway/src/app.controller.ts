import { Controller, Get, OnModuleInit, Query } from '@nestjs/common';
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

  @Get()
  async searchTracks(@Query('q') q: string) {
    return this.grpcService.search({ query: q });
  }
}
