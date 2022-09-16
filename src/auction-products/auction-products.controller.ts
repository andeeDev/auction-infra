import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuctionProductsService } from './auction-products.service';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { CreateAuctionProductDto } from './dto/CreateAuctionProductDto';

@Controller('/auction/products')
export class AuctionProductsController {
    constructor(private auctionProduct: AuctionProductsService) {}

    @Get()
    getAll(@Res() res: Response): Promise<Response> {
        return this.auctionProduct.getAll(res);
    }

    @Get('/:id')
    getOneProduct(@Param('id') id, @Res() res: Response): Promise<Response> {
        return this.auctionProduct.getOneProduct(id, res);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() body: CreateAuctionProductDto, @Req() req: Request, @Res() res: Response): Promise<Response> {
        return this.auctionProduct.createAuctionProduct(body, req.user, res);
    }
}
