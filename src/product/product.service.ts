import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ProductDto } from '../utils/dto/ProductDto';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';

@Injectable()
export class ProductService extends BaseOrderService {
    async getAllProducts(res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('products', {}, res);
    }

    async getSingleProduct(id: string, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('products/single', { id }, res);
    }

    async createProduct(data: ProductDto, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('products/create', data, res);
    }

    async updateProduct(id: string, data: ProductDto, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('products/update', { id, body: data }, res);
    }

    async deleteProduct(id: string, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('products/delete', { id }, res);
    }
}
