import { Module } from '@nestjs/common';
import { BidsService } from './bids.service';
import { BidsController } from './bids.controller';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { JwtStrategy } from '../jwt/jwt.strategy';

@Module({
    imports: [RabbitMqModule],
    providers: [BidsService, JwtStrategy],
    controllers: [BidsController],
})
export class BidsModule {}
