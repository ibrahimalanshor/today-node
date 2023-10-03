import { PaginateModel, model } from 'mongoose';
import { Todo } from '../todo.entity';
import { TodoSchema } from './todo.schema';

export const TodoModel = model<Todo, PaginateModel<Todo>>('todos', TodoSchema);
