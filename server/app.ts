import { join } from 'path';
import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const app:Application = express();
dotenv.config();
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

app.get('/', (req:Request, res:Response):void => {
  res.json({ msg: 'Hello CleanStead' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req:Request, res:Response):void => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

export default app;
