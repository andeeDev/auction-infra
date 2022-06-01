import { IsNotEmpty, IsNumber, Length, Max, Min } from 'class-validator';

export class OrderProductDto {
    @IsNumber()
    @Min(1)
    @Max(99)
    amount: number;

    @Length(24, 24)
    @IsNotEmpty()
    productId: string;
}
