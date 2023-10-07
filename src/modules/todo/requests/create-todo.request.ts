import { Request } from 'ekspres';
import Joi, { Schema } from 'joi';

export class CreateTodoRequest extends Request {
  schema(): Schema {
    return Joi.object({
      name: Joi.string().min(1).required(),
    });
  }
}
