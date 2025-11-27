import * as Joi from 'joi';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class JoiValidationPipe implements PipeTransform {
    private readonly schema;
    constructor(schema: Joi.ObjectSchema);
    transform(value: any, metadata?: ArgumentMetadata): any;
}
