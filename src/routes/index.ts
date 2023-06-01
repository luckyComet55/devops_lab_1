import {
  ErrorRequestHandler,
  Handler,
  Request,
  Response
} from 'express';

export const notFound = (req: Request, res: Response) => {
  res.type('text/plain');
  res.status(404);
  return res.send('404 - Not Found');
}

export const internalErr: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.type('text/plain');
  res.status(500);
  return res.send('500 - Unresolved Exception');
}

export const baseHandler = (req: Request, res: Response) => {
  res.type('application/json');
  res.status(200);
  return res.send({
    msg: 'Hello!',
  })
}

export const inputDataHandler = (req: Request, res: Response) => {

}