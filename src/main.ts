import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);

    app.connectMicroservice({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'], // amqp://rabbitmq:5672
            queueOptions: {
                durable: false,
            },
            /* queue: 'auth-service',
            queueOptions: {
                durable: false,
                messageTtl: 10_000,
            } */
        },
    });
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );
    await app.startAllMicroservices();
    await app.listen(3000); // new ConfigService().get('port')
}

bootstrap();
