import { Request, RequestPath, createRequestValidator } from 'ekspres';
import { isValidObjectId, Types } from 'mongoose';
import Joi, { Schema } from 'joi';
import { Handler } from 'express';

class ParamRequest extends Request {
  path: RequestPath = 'params';

  schema(): Schema {
    return Joi.object({
      id: Joi.custom((value: any, helpers: Joi.CustomHelpers) => {
        if (!isValidObjectId(value)) {
          return helpers.error('any.invalid');
        }

        return new Types.ObjectId(value);
      }),
    });
  }
}

export function mustMongoId(): Handler {
  return createRequestValidator(ParamRequest);
}
