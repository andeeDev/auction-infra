import { Module } from '@nestjs/common';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { ProductController } from './product.controller';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { ProductService } from './product.service';
import { BaseOrderModule } from '../baseOrder/BaseOrder.module';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';

@Module({
    imports: [RabbitMqModule, BaseOrderModule],
    providers: [ProductService, JwtStrategy, BaseOrderService],
    controllers: [ProductController, ProductController],
})
export class ProductModule {}
