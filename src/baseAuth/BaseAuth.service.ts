import { Response } from 'express';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ErrorHandler } from '../utils/helpers/ErrorHandler';
import { RabbitMqService } from '../rabbit-mq/rabbit-mq.service';
import { AuthServiceDto } from './dto/AuthServiceDTo';

@Injectable()
export class BaseAuthService {
    constructor(private rabbitMQService: RabbitMqService) {}

    async sendResponseTowardToAuthService(pattern: string, data: AuthServiceDto, res: Response): Promise<Response> {
        try {
            const rabbitResponse: any = await this.rabbitMQService.sendAuthService(pattern, data);

            return res.status(HttpStatus.OK).send(rabbitResponse);
        } catch (error: unknown) {
            return ErrorHandler.handleErrors(res, error as Error);
        }
    }
}
