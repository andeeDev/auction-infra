import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProvider } from '@nestjs/microservices/module/interfaces/clients-module.interface';
import { RabbitMqService } from './rabbit-mq.service';

@Module({
    imports: [
        ClientsModule.registerAsync([
            {
                name: 'auth-service',
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: async (configService: ConfigService): Promise<ClientProvider> => {
                    const rabbitmqConnectionUrl: string = `amqp://${configService.get<string>(
                        'rabbitmq.user',
                    )}:${configService.get<string>('rabbitmq.password')}@${configService.get<string>(
                        'rabbitmq.host',
                    )}/${configService.get<string>('rabbitmq.vhost')}`;

                    return {
                        transport: Transport.RMQ,
                        options: {
                            urls: [rabbitmqConnectionUrl],
                            queue: 'auth-service',
                            queueOptions: {
                                messageTtl: 10_000,
                            },
                        },
                    };
                },
            },
        ]),
        ClientsModule.registerAsync([
            {
                name: 'order-service',
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: async (configService: ConfigService): Promise<ClientProvider> => {
                    const rabbitmqConnectionUrl: string = `amqp://${configService.get<string>(
                        'rabbitmq.user',
                    )}:${configService.get<string>('rabbitmq.password')}@${configService.get<string>(
                        'rabbitmq.host',
                    )}/${configService.get<string>('rabbitmq.vhost')}`;

                    return {
                        transport: Transport.RMQ,
                        options: {
                            urls: [rabbitmqConnectionUrl],
                            queue: 'order-service',
                            queueOptions: {
                                messageTtl: 10_000,
                            },
                        },
                    };
                },
            },
        ]),
    ],
    providers: [RabbitMqService],
    exports: [RabbitMqService],
})
export class RabbitMqModule {}
