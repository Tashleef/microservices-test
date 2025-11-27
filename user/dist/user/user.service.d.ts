import { HttpService } from '@nestjs/axios';
import { UserRepository } from './user.repository';
import { IUser } from './user.interface';
export declare class UserService {
    private readonly userRepository;
    private readonly httpClient;
    constructor(userRepository: UserRepository, httpClient: HttpService);
    create(user: IUser): Promise<IUser>;
    getAll(): IUser[];
}
