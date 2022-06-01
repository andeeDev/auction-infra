import { OrderProductDto } from '../../order/Dto/OrderProductDto';

export interface DeleteOrderDto {
    userId: number;
    orderId: string;
}

export interface GetOrderDto {
    userId: number;
}

export interface CreateOrderDto {
    userId: number;
    products: OrderProductDto[];
}

export type OrderServiceMessageType = GetOrderDto | DeleteOrderDto | CreateOrderDto;
