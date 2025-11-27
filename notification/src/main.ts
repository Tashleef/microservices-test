import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/http/response/response.interceptor';
import { AllExceptionsFilter } from './common/exception/http-exception.interseptor';
import { Logger } from '@nestjs/common';
import { LoggingInterceptor } from './common/http/request/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(new Logger()));
  app.useGlobalInterceptors(new LoggingInterceptor(new Logger()));
  await app.listen(3002);
}
bootstrap();
