/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq:5672'],
      queue: 'number_action_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  const port = process.env.PORT || 3000;
  await app.listen();
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();
