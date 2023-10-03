import { TodoModel } from './model/todo.model';

export class TodoHandler {
  async getAll() {
    return await TodoModel.paginate();
  }
}
