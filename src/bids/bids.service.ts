import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { RabbitMqService } from '../rabbit-mq/rabbit-mq.service';
import { ErrorHandler } from '../utils/helpers/ErrorHandler';
import { IBareUser, IBid, IBidWithUser } from '../utils/types/types';

@Injectable()
export class BidsService {
    constructor(private readonly rabbitMQService: RabbitMqService) {}

    async getAllBids(id: string, res: Response): Promise<Response> {
        try {
            const allUsersResponse: IBareUser[] = await this.rabbitMQService.sendAuthService('users-get-all', {});

            const bidsResponse: IBid[] = await this.rabbitMQService.sendOrderService('/auction/products/bids', { id });

            const bids: IBidWithUser[] = bidsResponse.map((bid: IBid) => {
                return {
                    ...bid,
                    user: allUsersResponse.find((user: IBareUser) => bid.userId === user.id),
                };
            });

            return res.status(HttpStatus.OK).send(bids);
        } catch (error: unknown) {
            return ErrorHandler.handleErrors(res, error as Error);
        }
    }

    async createBid(data: any, res: Response): Promise<Response> {
        try {
            const rabbitResponse: any = await this.rabbitMQService.sendOrderService(
                '/auction/products/bids/create',
                data,
            );

            return res.status(HttpStatus.OK).send(rabbitResponse);
        } catch (error: unknown) {
            return ErrorHandler.handleErrors(res, error as Error);
        }
    }
}
