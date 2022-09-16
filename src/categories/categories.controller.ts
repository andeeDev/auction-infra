import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoryService: CategoriesService) {}

    @Get()
    getAllCategories(@Res() res: Response): Promise<Response> {
        return this.categoryService.getAllCategories(res);
    }

    @Get('/:category/products')
    getProductsByCategory(@Param() param, @Res() res: Response): Promise<Response> {
        return this.categoryService.getProductsByCategory(param.category, res);
    }
}
