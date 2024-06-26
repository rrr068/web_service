import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  console.log('JWT_SECRET:', configService.get<string>('JWT_SECRET'));
  await app.listen(4000);
}
bootstrap();
