import * as Joi from 'joi';
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Joi.ObjectSchema) {}

  transform(value: any, metadata?: ArgumentMetadata) {
    const { error } = this.schema
      .unknown(false)
      .validate(value, { abortEarly: false });
    if (error) {
      throw new BadRequestException(error.message.replace(/(\"|\[|\d\])/g, ''));
    }

    return value;
  }
}
