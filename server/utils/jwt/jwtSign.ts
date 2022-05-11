import dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';

dotenv.config();
const jwtSign = (payload: object) => new Promise((resolve, reject) => {
  sign(payload, process.env.SECRET_KEY as string, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export default jwtSign;
