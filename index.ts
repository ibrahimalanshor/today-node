import './src/app/env';

import { App } from 'ekspres';
import { routes } from './src/app/routes';
import { middlewares } from './src/app/middlewares';
import { connect } from './src/db/connect';

const app = new App();

app.setMiddlewares(middlewares);
app.setRoutes(routes);

async function run() {
  try {
    await connect();

    app.listen((port) => console.log(`app listening at ${port}`));
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}

run();
