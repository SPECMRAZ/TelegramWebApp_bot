import { Module } from '@nestjs/common';
import { AppBot } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [AppBot],
})
export class AppModule {}
