import { Test, TestingModule } from '@nestjs/testing';
import { AuctionProductsController } from './auction-products.controller';

describe('AuctionProductsController', () => {
    let controller: AuctionProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuctionProductsController],
        }).compile();

        controller = module.get<AuctionProductsController>(AuctionProductsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
