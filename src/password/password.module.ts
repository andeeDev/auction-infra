import { Module } from '@nestjs/common';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import { BaseAuthModule } from '../baseAuth/BaseAuth.module';
import { BaseAuthService } from '../baseAuth/BaseAuth.service';

@Module({
    imports: [RabbitMqModule, BaseAuthModule],
    providers: [PasswordService, BaseAuthService],
    controllers: [PasswordController],
})
export class PasswordModule {}
