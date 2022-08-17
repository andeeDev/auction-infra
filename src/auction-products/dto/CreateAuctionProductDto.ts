import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

    @IsDateString()
    @IsNotEmpty()
    createdAt: string;

    @IsDateString()
    @IsNotEmpty()
    sellTil: string;

    userId: number;
}
