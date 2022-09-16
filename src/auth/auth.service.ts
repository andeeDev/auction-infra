import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { UserCreateDto } from './dto/UserDto';
import { ConfirmCodeDto } from './dto/ConfirmCodeDto';
import { BaseAuthService } from '../baseAuth/BaseAuth.service';

@Injectable()
export class AuthService extends BaseAuthService {
    async login(body: UserCreateDto, res: Response): Promise<Response> {
        return this.sendResponseTowardToAuthService('login', body, res);
    }

    async register(body: UserCreateDto, res: Response): Promise<Response> {
        return this.sendResponseTowardToAuthService('register', body, res);
    }

    async confirmAccount(body: ConfirmCodeDto, res: Response): Promise<Response> {
        return this.sendResponseTowardToAuthService('confirm', body, res);
    }
}
