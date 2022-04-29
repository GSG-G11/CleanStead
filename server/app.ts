import { join } from 'path';
import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { clientError, serverError } from './controllers';
import apiRouter from './routes';

const app:Application = express();
dotenv.config();
const {
  env: { PORT, NODE_ENV },
} = process;
app.set('port', PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.disable('x-powered-by');

if (NODE_ENV === 'development') {
  app.get('/', (req:Request, res:Response):void => {
    res.json({ message: 'Hello CleanStead' });
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req:Request, res:Response):void => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use('/api/v1', apiRouter);
app.use(clientError);
app.use(serverError);

export default app;
