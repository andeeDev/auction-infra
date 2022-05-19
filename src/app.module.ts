import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { OrderController } from './order/order.controller';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AppController, AuthController, OrderController],
    providers: [AppService],
})
export class AppModule {}
