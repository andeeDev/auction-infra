import { Response } from 'express';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ErrorHandler } from '../utils/helpers/ErrorHandler';
import { RabbitMqService } from '../rabbit-mq/rabbit-mq.service';
import { ProductsMessage } from '../product/Dto/ProductsMessage';
import { OrderServiceMessageType } from '../utils/dto/AuthServiceMessageDto';
import { CreateAuctionProductDto } from '../auction-products/dto/CreateAuctionProductDto';
import { GetOneProductInfo } from '../auction-products/dto/GetOneProductInfo';

@Injectable()
export class BaseOrderService {
    constructor(private rabbitMQService: RabbitMqService) {}

    async sendResponseTowardToOrderService(
        pattern,
        data: ProductsMessage | OrderServiceMessageType | CreateAuctionProductDto | GetOneProductInfo,
        res: Response,
    ): Promise<Response> {
        try {
            const rabbitResponse: any = await this.rabbitMQService.sendOrderService(pattern, data);

            return res.status(HttpStatus.OK).send(rabbitResponse);
        } catch (error: unknown) {
            return ErrorHandler.handleErrors(res, error as Error);
        }
    }
}
