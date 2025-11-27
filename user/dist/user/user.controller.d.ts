import { UserService } from './user.service';
import { IUser } from './user.interface';
import { UserValidation } from './user.validation';
export declare class UserController {
    private readonly userValidation;
    private readonly userService;
    constructor(userValidation: UserValidation, userService: UserService);
    createUser(body: IUser): Promise<IUser>;
    getAllUsers(): IUser[];
}
