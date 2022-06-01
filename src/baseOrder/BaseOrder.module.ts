import { Module } from '@nestjs/common';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { BaseOrderService } from './BaseOrder.service';

@Module({
    imports: [RabbitMqModule],
    providers: [BaseOrderService],
    exports: [BaseOrderService],
})
export class BaseOrderModule {}
