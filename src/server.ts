import express from 'express';
// src/server.ts
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3335, () => {
  console.log('☘ server started on port 3335!');
});
