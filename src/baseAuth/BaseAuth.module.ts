import { Module } from '@nestjs/common';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { BaseAuthService } from './BaseAuth.service';

@Module({
    imports: [RabbitMqModule],
    providers: [BaseAuthService],
    exports: [BaseAuthService],
})
export class BaseAuthModule {}
