export interface IBid {
    id: string;
    price: number;
    userId: number;
    createdAt: string;
    auctionProductId: string;
}

export interface IBareUser {
    id: number;
    email: string;
    name: string | null;
}

export interface IBidWithUser extends IBid {
    user: IBareUser;
}
