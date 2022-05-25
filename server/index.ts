/* eslint-disable no-console */
import { app, server } from './app';

server.listen(app.get('port'), ():void => {
  console.log(`Server Running here 👉 http://localhost:${app.get('port')}`);
});
