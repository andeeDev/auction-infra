import { ProductDto } from '../../utils/dto/ProductDto';

interface DeleteDto {
    id: string;
}

interface CreateProductDto {
    id: string;
    body: ProductDto;
}

export type ProductsMessage = ProductDto | CreateProductDto | DeleteDto | Record<string, never>;
