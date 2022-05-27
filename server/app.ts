import { join } from 'path';
import http from 'http';
import { Server } from 'socket.io';
import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { clientError, serverError } from './controllers';
import router from './routes';

const app:Application = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `https://${process.env.HOSTNAME || 'localhost'}:${process.env.PORT || 5000}`,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  },
});

let socketConnected : any;
io.on('connection', (socket) => {
  socketConnected = socket;
});

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

app.use('/api/v1', router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req:Request, res:Response):void => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

export { app, server, socketConnected };
