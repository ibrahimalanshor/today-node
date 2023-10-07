import { Request } from 'ekspres';
import Joi, { Schema } from 'joi';

export class UpdateTodoRequest extends Request {
  schema(): Schema {
    return Joi.object({
      name: Joi.string().min(1).optional(),
      isDone: Joi.bool().optional(),
    });
  }
}
