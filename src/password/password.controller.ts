import { Body, Post, Res, UseFilters, Controller } from '@nestjs/common';
import { Response } from 'express';
import { RpcExceptionFilterMapping } from '../utils/filters/RpcExceptionFilter';
import { PasswordService } from './password.service';
import { SendResetCodeDto } from './dto/SendResetCodeDto';
import { GetTokenDto } from './dto/GetTokenDto';
import { ResetPasswordDto } from './dto/ResetPasswordDto';

@Controller('password')
@UseFilters(new RpcExceptionFilterMapping())
export class PasswordController {
    constructor(private passwordService: PasswordService) {}

    @Post('/verification')
    async verifyToken(@Body() body: SendResetCodeDto, @Res() res: Response): Promise<Response> {
        return this.passwordService.verifyToken(body, res);
    }

    @Post('/token')
    async getToken(@Body() body: GetTokenDto, @Res() res: Response): Promise<Response> {
        return this.passwordService.getToken(body, res);
    }

    @Post('/reset')
    async resetPassword(@Body() body: ResetPasswordDto, @Res() res: Response): Promise<Response> {
        return this.passwordService.resetPassword(body, res);
    }
}
