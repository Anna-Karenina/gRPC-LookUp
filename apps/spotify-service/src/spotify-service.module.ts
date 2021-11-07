import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [AuthModule, SearchModule],
  controllers: [],
  providers: [],
})
export class SpotifyServiceModule {}
