import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('SpotifyService_Auth', 'SignIn')
  sign_in(_: any, metadata: any): any {
    // return { sum: this.service1Service.accumulate(numberArray.data) };
  }
}
