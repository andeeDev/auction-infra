import { Module } from '@nestjs/common';
import { AuctionProductsController } from './auction-products.controller';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { BaseOrderModule } from '../baseOrder/BaseOrder.module';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';
import { AuctionProductsService } from './auction-products.service';

@Module({
    imports: [RabbitMqModule, BaseOrderModule],
    providers: [AuctionProductsService, JwtStrategy, BaseOrderService],
    controllers: [AuctionProductsController],
})
export class AuctionProductsModule {}
