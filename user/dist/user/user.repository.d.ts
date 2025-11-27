import { IUser } from './user.interface';
export declare class UserRepository {
    private users;
    constructor();
    createUser(user: IUser): IUser;
    findByEmail(email: string): IUser;
    findAll(): IUser[];
}
