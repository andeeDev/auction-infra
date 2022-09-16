import { IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class ConfirmCodeDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(4, 4)
    @IsNumberString()
    code: string;
}
