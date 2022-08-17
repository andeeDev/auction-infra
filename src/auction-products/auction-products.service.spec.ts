import { Test, TestingModule } from '@nestjs/testing';
import { AuctionProductsService } from './auction-products.service';

describe('AuctionProductsService', () => {
    let service: AuctionProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuctionProductsService],
        }).compile();

        service = module.get<AuctionProductsService>(AuctionProductsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
