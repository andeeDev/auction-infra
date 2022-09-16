import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { OrderDto } from './Dto/OrderDto';
import { User } from '../utils/dto/User';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';

@Injectable()
export class OrderService extends BaseOrderService {
    async getAllOrders(user: User, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('orders', { userId: user.userId }, res);
    }

    async createOrder(data: OrderDto, user: User, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService(
            'orders/create',
            { userId: user.userId, products: data.products },
            res,
        );
    }

    async deleteOrder(user: User, orderId: string, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('orders/delete', { userId: user.userId, orderId }, res);
    }
}
