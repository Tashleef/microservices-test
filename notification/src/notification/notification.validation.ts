import { Injectable } from '@nestjs/common';
import { INotification } from './notification.interface';
import * as Joi from 'joi';
import { JoiValidationPipe } from 'src/common/validation/joi.pipes';

@Injectable()
export class NotificationValidation {
  async create(body: INotification) {
    const createNotification = Joi.object<INotification>({
      userId: Joi.number().min(1).required(),
      message: Joi.string().required(),
    });

    return new JoiValidationPipe(createNotification).transform(body);
  }
}
