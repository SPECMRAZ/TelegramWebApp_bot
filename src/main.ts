import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppBot } from './app.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5555);
  const TgBotService = app.get(AppBot);
  await TgBotService.startBot();
}
bootstrap();
