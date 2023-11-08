import * as dotenv from 'dotenv';
dotenv.config(); //{ path: 'backend/.env' } ?
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT || 5000);
  console.log(`NestJS running at ${await app.getUrl()}`);
}
bootstrap();
