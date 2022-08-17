import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
import { AuthServiceDto } from '../baseAuth/dto/AuthServiceDTo';
import { OrderServiceMessageType } from '../utils/dto/AuthServiceMessageDto';
import { ProductsMessage } from '../product/Dto/ProductsMessage';
import { CreateAuctionProductDto } from '../auction-products/dto/CreateAuctionProductDto';
import { GetOneProductInfo } from '../auction-products/dto/GetOneProductInfo';

@Injectable()
export class RabbitMqService {
    constructor(
        @Inject('auth-service') private readonly authClient: ClientProxy,
        @Inject('order-service') private readonly orderClient: ClientProxy,
    ) {}

    public sendAuthService(pattern: string, data: AuthServiceDto = {}): Promise<any> {
        return RabbitMqService.send(this.authClient, pattern, data);
    }

    public sendOrderService(
        pattern: string,
        data: OrderServiceMessageType | ProductsMessage | CreateAuctionProductDto | GetOneProductInfo = {},
    ): Promise<any> {
        return RabbitMqService.send(this.orderClient, pattern, data);
    }

    private static send(client: ClientProxy, pattern: string, data: any): Promise<any> {
        return firstValueFrom(client.send(pattern, data).pipe(timeout(10_000))) /* .toPromise() */;
    }
}
