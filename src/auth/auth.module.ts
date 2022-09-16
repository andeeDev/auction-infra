import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { AuthService } from './auth.service';
import { BaseAuthModule } from '../baseAuth/BaseAuth.module';
import { BaseAuthService } from '../baseAuth/BaseAuth.service';

@Module({
    imports: [RabbitMqModule, BaseAuthModule],
    providers: [AuthService, BaseAuthService],
    controllers: [AuthController],
})
export class AuthModule {}
