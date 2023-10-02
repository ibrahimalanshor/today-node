import { App } from 'ekspres';
import { routes } from './src/routes';

const app = new App();

app.setRoutes(routes);
app.listen((port) => console.log(`app listening at ${port}`));
