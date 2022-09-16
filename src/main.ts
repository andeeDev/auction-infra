import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RpcExceptionFilterMapping } from './utils/filters/RpcExceptionFilter';

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    );
    app.enableCors();
    app.connectMicroservice({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'], // amqp://rabbitmq:5672// amqp://localhost:5672
            queueOptions: {
                durable: false,
            },
        },
    });

    app.useGlobalFilters(new RpcExceptionFilterMapping());

    await app.startAllMicroservices();
    await app.listen(3001);
}

/* eslint-disable unicorn/prefer-top-level-await */
bootstrap();
