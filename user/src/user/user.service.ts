import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UserRepository } from './user.repository';
import { IUser } from './user.interface';
import { firstValueFrom } from 'rxjs';
import { serviceConfig } from 'src/common/config/service.config';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly httpClient: HttpService,
  ) {}

  async create(user: IUser) {
    const existUser = this.userRepository.findByEmail(user.email);
    if (existUser) {
      throw new BadRequestException('User already exists');
    }
    const createdUser = this.userRepository.createUser(user);

    try {
      const notificationServiceUrl = serviceConfig.notificationServiceUrl;
      console.log(notificationServiceUrl);
      await firstValueFrom(
        this.httpClient.post(`${notificationServiceUrl}/notifications`, {
          userId: createdUser.id,
          message: `Welcome ${createdUser.name}! Your account has been created.`,
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
    return createdUser;
  }

  getAll() {
    return this.userRepository.findAll();
  }
}
