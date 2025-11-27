import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import { usersData } from './user.data';

@Injectable()
export class UserRepository {
  private users: IUser[];
  constructor() {
    this.users = usersData;
  }

  createUser(user: IUser) {
    this.users.push({ ...user, id: this.users.length + 1, createdAt: new Date() });
    return this.users[this.users.length - 1];
  }

  findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  findAll() {
    return this.users;
  }
}
