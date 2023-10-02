import { App } from 'ekspres';
import { routes } from './src/app/routes';
import { middlewares } from './src/app/middlewares';

const app = new App();

app.setMiddlewares(middlewares);
app.setRoutes(routes);
app.listen((port) => console.log(`app listening at ${port}`));
