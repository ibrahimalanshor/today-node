import { HttpError, RouterContext } from 'ekspres';
import { TodoModel } from './model/todo.model';

export class TodoHandler {
  async getAll() {
    return await TodoModel.paginate();
  }
  async create(context: RouterContext) {
    return await TodoModel.create({
      name: context.body.name,
    });
  }
  async getOne(context: RouterContext) {
    const todo = await TodoModel.findById(context.params.id);

    if (!todo) {
      throw new HttpError(
        {
          name: 'Not Found',
          message: 'Todo not found',
        },
        404,
      );
    }

    return todo;
  }
  async update(context: RouterContext) {
    const todo = await TodoModel.findById(context.params.id);

    if (!todo) {
      throw new HttpError(
        {
          name: 'Not Found',
          message: 'Todo not found',
        },
        404,
      );
    }

    await todo.updateOne(context.body);

    return todo;
  }
  async delete(context: RouterContext) {
    const todo = await TodoModel.findById(context.params.id);

    if (!todo) {
      throw new HttpError(
        {
          name: 'Not Found',
          message: 'Todo not found',
        },
        404,
      );
    }

    await todo.deleteOne();

    return todo;
  }
}
