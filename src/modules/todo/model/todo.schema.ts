import { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { Todo } from '../todo.entity';

const TodoSchema = new Schema<Todo>({
  name: {
    type: String,
    required: true,
  },
});

TodoSchema.plugin(paginate);

export { TodoSchema };
