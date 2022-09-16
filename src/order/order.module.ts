import { Module } from '@nestjs/common';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { BaseOrderModule } from '../baseOrder/BaseOrder.module';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';

@Module({
    imports: [RabbitMqModule, BaseOrderModule],
    providers: [OrderService, JwtStrategy, BaseOrderService],
    controllers: [OrderController, OrderController],
})
export class OrderModule {}
