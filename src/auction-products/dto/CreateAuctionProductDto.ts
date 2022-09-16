import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString, MinDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAuctionProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    startPrice: number;

    @IsString()
    @IsNotEmpty()
    mainImg: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    // eslint-disable-next-line @typescript-eslint/typedef
    @Transform(({ value }) => new Date(value))
    @IsDate()
    @MinDate(new Date())
    sellTil: string;

    userId: number;
}
