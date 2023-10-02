import { Schema } from 'mongoose';
import { Todo } from '../todo.entity';

export const TodoSchema = new Schema<Todo>({
  name: {
    type: String,
    required: true,
  },
});
