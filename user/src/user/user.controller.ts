import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { UserValidation } from './user.validation';

@Controller('users')
export class UserController {
  constructor(
    private readonly userValidation: UserValidation,
    private readonly userService: UserService,
  ) {}

  @Post('')
  createUser(@Body() body: IUser) {
    this.userValidation.create(body);
    return this.userService.create(body);
  }

  @Get('')
  getAllUsers() {
    return this.userService.getAll();
  }
}
