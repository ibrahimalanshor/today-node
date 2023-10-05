import { Router, RouterGroup, createRequestValidator } from 'ekspres';
import { RequestHandler } from 'express';
import { TodoHandler } from './todo.handler';
import { CreateTodoRequest } from './requests/create-todo.request';

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
  .make();
