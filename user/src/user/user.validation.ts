import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import * as Joi from 'joi';
import { JoiValidationPipe } from 'src/common/validation/joi.pipes';

@Injectable()
export class UserValidation {
  create(body: IUser) {
    const createUser = Joi.object<IUser>({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    return new JoiValidationPipe(createUser).transform(body);
  }
}
