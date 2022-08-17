import { ConfirmCodeDto } from '../../auth/dto/ConfirmCodeDto';
import { UserCreateDto } from '../../auth/dto/UserDto';
import { SendResetCodeDto } from '../../password/dto/SendResetCodeDto';
import { GetTokenDto } from '../../password/dto/GetTokenDto';
import { ResetPasswordDto } from '../../password/dto/ResetPasswordDto';

export type AuthServiceDto =
    | ConfirmCodeDto
    | UserCreateDto
    | SendResetCodeDto
    | GetTokenDto
    | ResetPasswordDto
    | Record<string, never>;
