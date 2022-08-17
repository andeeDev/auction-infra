import { IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class ProductDto {
    @IsOptional()
    @Length(0, 200)
    title: string;

    @IsOptional()
    @Length(0, 200)
    description: string;

    @IsOptional()
    @IsString()
    mainImg: string;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @Max(99_999.99)
    price: number;

    @IsOptional()
    photos: string[];

    @IsOptional()
    category: string;
}
