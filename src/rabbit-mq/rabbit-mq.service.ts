import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';
import { AuthServiceDto } from '../baseAuth/dto/AuthServiceDTo';
import { OrderServiceMessageType } from '../utils/dto/AuthServiceMessageDto';
import { ProductsMessage } from '../product/Dto/ProductsMessage';

@Injectable()
export class RabbitMqService {
    constructor(
        @Inject('auth-service') private readonly authClient: ClientProxy,
        @Inject('order-service') private readonly orderClient: ClientProxy
    ) {}

    public sendAuthService(pattern: string, data: AuthServiceDto): Promise<void> {
        return this.send(this.authClient, pattern, data);
    }

    public sendOrderService(pattern: string, data: OrderServiceMessageType | ProductsMessage): Promise<void> {
        return this.send(this.orderClient, pattern, data);
    }

    private send(client: ClientProxy, pattern: string, data: any): Promise<void> {
        return client.send(pattern, data).pipe(timeout(10_000)).toPromise();
    }
}
