import { baseHandler } from './routes';

import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 3000

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Unresolved Exception');
})

app.get('/', baseHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
