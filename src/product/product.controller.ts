import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { ProductDto } from '../utils/dto/ProductDto';
import { FindOneParams } from './Dto/ProductParamIdValidation';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    async getProducts(@Res() res: Response): Promise<Response> {
        return this.productService.getAllProducts(res);
    }

    @Get(':id')
    async getProduct(@Param() { id }: FindOneParams, @Res() res: Response): Promise<Response> {
        return this.productService.getSingleProduct(id, res);
    }

    @Post()
    async createProducts(@Body() body: ProductDto, @Res() res: Response): Promise<Response> {
        return this.productService.createProduct(body, res);
    }

    @Patch(':id')
    async updateProducts(
        @Param() { id }: FindOneParams,
        @Body() body: ProductDto,
        @Res() res: Response,
    ): Promise<Response> {
        return this.productService.updateProduct(id, body, res);
    }

    @Delete(':id')
    async deleteProducts(@Param() { id }: FindOneParams, @Res() res: Response): Promise<Response> {
        return this.productService.deleteProduct(id, res);
    }
}
