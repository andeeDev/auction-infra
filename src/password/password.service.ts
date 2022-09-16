import { Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseAuthService } from '../baseAuth/BaseAuth.service';
import { ResetPasswordDto } from './dto/ResetPasswordDto';
import { GetTokenDto } from './dto/GetTokenDto';
import { SendResetCodeDto } from './dto/SendResetCodeDto';

export class PasswordService extends BaseAuthService {
    async verifyToken(@Body() body: SendResetCodeDto, @Res() res: Response): Promise<Response> {
        return this.sendResponseTowardToAuthService('verification', body, res);
    }

    async getToken(@Body() body: GetTokenDto, @Res() res: Response): Promise<Response> {
        return this.sendResponseTowardToAuthService('token', body, res);
    }

    async resetPassword(@Body() body: ResetPasswordDto, @Res() res: Response): Promise<Response> {
        return this.sendResponseTowardToAuthService('reset', body, res);
    }
}
