import { RequestHandler } from 'express';
import { todoRoutes } from '../modules/todo/todo.router';

export const routes: RequestHandler[] = [...todoRoutes];
