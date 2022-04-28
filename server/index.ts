/* eslint-disable no-console */
import app from './app';

app.listen(app.get('port'), ():void => {
  console.log(`Server Running here 👉 http://localhost:${app.get('port')}`);
});
