import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { BaseOrderService } from '../baseOrder/BaseOrder.service';

@Injectable()
export class CategoriesService extends BaseOrderService {
    async getAllCategories(res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('categories', {}, res);
    }

    async getProductsByCategory(categoryId: string, res: Response): Promise<Response> {
        return this.sendResponseTowardToOrderService('categoryProduct', { id: categoryId }, res);
    }
}
