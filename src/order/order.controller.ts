import { Body, Controller, Delete, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { OrderDto } from './Dto/OrderDto';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    async getOrders(@Req() req: Request, @Res() res: Response): Promise<any> /* Promise<Response> */ {
        return this.orderService.getAllOrders(req.user, res);
    }

    @Post()
    async createOrder(@Body() body: OrderDto, @Req() req: Request, @Res() res: Response): Promise<Response> {
        return this.orderService.createOrder(body, req.user, res);
    }

    @Delete(':id')
    async deleteOrder(@Param() param, @Req() req: Request, @Res() res: Response): Promise<Response> {
        return this.orderService.deleteOrder(req.user, param.id, res);
    }
}
