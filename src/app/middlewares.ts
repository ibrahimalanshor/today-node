import { Handler } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export const middlewares: Handler[] = [cors(), helmet(), morgan('tiny')];
