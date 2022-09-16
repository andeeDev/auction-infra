export interface User extends Express.User {
    email?: string;
    name?: string;
    userId?: number;
}
