import { IsString, Length } from 'class-validator';

export class FindOneParams {
    @IsString()
    @Length(24, 24)
    id: string;
}
