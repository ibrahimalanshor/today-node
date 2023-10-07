import { RouterGroup, createRequestValidator } from 'ekspres';
import { RequestHandler } from 'express';
import { TodoHandler } from './todo.handler';
import { CreateTodoRequest } from './requests/create-todo.request';
import { UpdateTodoRequest } from './requests/update-todo.request';
import { mustMongoId } from '../../middlewares/params-mongo-id';

const handler = new TodoHandler();

export const todoRoutes: RequestHandler = new RouterGroup()
  .handle({
    path: '/todos',
    method: 'get',
    handler: handler.getAll,
  })
  .handle({
    path: '/todos',
    method: 'post',
    middlewares: [createRequestValidator(CreateTodoRequest)],
    handler: handler.create,
  })
  .handle({
    path: '/todos/:id',
    method: 'get',
    middlewares: [mustMongoId()],
    handler: handler.getOne,
  })
  .handle({
    path: '/todos/:id',
    method: 'patch',
    middlewares: [mustMongoId(), createRequestValidator(UpdateTodoRequest)],
    handler: handler.update,
  })
  .handle({
    path: '/todos/:id',
    method: 'delete',
    middlewares: [mustMongoId()],
    handler: handler.delete,
  })
  .make();
