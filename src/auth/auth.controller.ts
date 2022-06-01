import { Body, Controller, Post, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { RabbitMqService } from '../rabbit-mq/rabbit-mq.service';
import { RpcExceptionFilterMapping } from '../utils/filters/RpcExceptionFilter';
import { AuthService } from './auth.service';
import { UserCreateDto } from './dto/UserDto';
import { ConfirmCodeDto } from './dto/ConfirmCodeDto';

@Controller('auth')
@UseFilters(new RpcExceptionFilterMapping())
export class AuthController {
    constructor(private rabbitMQService: RabbitMqService, private authService: AuthService) {}

    @Post('/login')
    async loginUser(@Body() loginRequest: UserCreateDto, @Res() res): Promise<Response> {
        return this.authService.login(loginRequest, res);
    }

    @Post('/register')
    async registerUser(@Body() body: UserCreateDto, @Res() res): Promise<Response> {
        return this.authService.register(body, res);
    }

    @Post('account/confirm')
    async confirmCode(@Body() body: ConfirmCodeDto, @Res() res): Promise<Response> {
        return this.authService.confirmAccount(body, res);
    }
}
