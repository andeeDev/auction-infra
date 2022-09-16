import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';
import { CreateAuctionProductDto } from './dto/CreateAuctionProductDto';
import { User } from '../utils/dto/User';

@Injectable()
export class AuctionProductsService extends BaseOrderService {
    getAll(res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('/auction/products/getAll', {}, res);
    }

    getOneProduct(id: string, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('/auction/products/one', { productId: id }, res);
    }

    createAuctionProduct(body: CreateAuctionProductDto, user: User, res: Response): Promise<Response> {
        // return res.status(200).send({ test: 'test' });
        return this.sendResponseTowardToOrderService('/auction/products/create', { userId: user.userId, ...body }, res);
    }
}
