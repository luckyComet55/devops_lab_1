import {
  baseHandler,
  internalErr,
  notFound,
} from './routes';

import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 3000

app.get('/', baseHandler);

app.use(notFound);

app.use(internalErr)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
