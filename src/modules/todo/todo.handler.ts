import { RouterContext } from 'ekspres';
import { TodoModel } from './model/todo.model';

export class TodoHandler {
  async getAll() {
    return await TodoModel.paginate();
  }
  async create(context: RouterContext) {
    return await TodoModel.create({
      name: context.req.body,
    });
  }
}
