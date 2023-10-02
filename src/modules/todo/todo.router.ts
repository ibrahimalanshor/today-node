import { Router } from 'ekspres';
import { RequestHandler } from 'express';
import { TodoHandler } from './todo.handler';

const handler = new TodoHandler();

export const todoRoutes: RequestHandler[] = [
  new Router().setPath('/todos').setMethod('get').handle(handler.getAll).make(),
];
