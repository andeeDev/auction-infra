import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { PasswordModule } from './password/password.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './categories/categories.module';
import { AuctionProductsService } from './auction-products/auction-products.service';
import { AuctionProductsModule } from './auction-products/auction-products.module';
import { BidsModule } from './bids/bids.module';

@Module({
    imports: [
        AuthModule,
        PasswordModule,
        OrderModule,
        ProductModule,
        CategoriesModule,
        RabbitMqModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            validationSchema,
            envFilePath: ['.env'],
        }),
        AuctionProductsModule,
        BidsModule,
    ],
    controllers: [],
    providers: [AuctionProductsService],
})
export class AppModule {}
