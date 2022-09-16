import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { BidsService } from './bids.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';

@Controller('/auction/products/:id/bids')
export class BidsController {
    constructor(private readonly bidsService: BidsService) {}

    @Get()
    getAll(@Param('id') id, @Res() res): Promise<Response> {
        return this.bidsService.getAllBids(id, res);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    createBid(@Param('id') id, @Body() data, @Req() req: Request, @Res() res: Response): Promise<Response> {
        return this.bidsService.createBid({ ...data, userId: req.user.userId, productId: id }, res);
    }
}
