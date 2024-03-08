import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppBot } from './app.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const TgBotService = app.get(AppBot);
  await TgBotService.startBot();
}
bootstrap();
