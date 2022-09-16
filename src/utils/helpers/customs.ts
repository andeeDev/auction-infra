export {};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface User {
            email?: string;
            name?: string;
            userId?: number;
        }
    }
}
