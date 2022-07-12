import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { BaseOrderModule } from '../baseOrder/BaseOrder.module';
import { CategoriesController } from './categories.controller';

@Module({
    imports: [RabbitMqModule, BaseOrderModule],
    providers: [CategoriesService],
    controllers: [CategoriesController],
})
export class CategoriesModule {}
